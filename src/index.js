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

function* rootSaga() {}

function gifReducer(state = [], action) {
  return state;
}

const storeInstance = createStore(
  combineReducers({
    gifReducer,
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
