import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import App from "./components/App/App";
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

const middleWareSaga = createSagaMiddleware();

function* rootSaga() {
  yield takeEvery("GET_FAVORITES", getFavorites);
}

function* getFavorites(action) {
  const results = yield axios.get("/api/favorite");
  yield put({ type: "SET_FAVORITES", payload: results.data });
}

function gifReducer(state = [], action) {
  return state;
}

function favoritesReducer(state = [], action) {
  if (action.type === "SET_FAVORITES") {
    return action.payload;
  }
  return state;
}

const storeInstance = createStore(
  combineReducers({
    gifReducer,
    favorites: favoritesReducer,
  }),
  applyMiddleware(logger, middleWareSaga)
);

middleWareSaga.run(rootSaga);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
