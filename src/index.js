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
  yield takeEvery('ADD_FAVORITE', addFavorite)
  yield takeEvery("GET_CATEGORIES", getCategories);
  yield takeEvery("SAVE_CATEGORIES", saveCategories);
  yield takeEvery("SEARCH_GIF", searchGifSaga);
  yield takeEvery("REMOVE_FAVORITE", removeFavorite);
  yield takeEvery("DELETE_CATEGORY", deleteCategory);
  yield takeEvery("ADD_CATEGORY", addCategory);
}

function* getCategories(action) {
  try {
    const results = yield axios.get("/api/category");
    yield put({ type: "SET_CATEGORIES", payload: results.data });
  } catch (error) {
    console.log("error caught in getCategories :>> ", error);
  }
}

function* saveCategories(action) {
  try {
    yield axios.put(`/api/favorite/${action.payload.id}`, {
      category_id: action.payload.category_id,
    });
    yield put({ type: "GET_FAVORITES" });
  } catch (error) {
    console.log("error caught in saveCategories :>> ", error);
  }
}

function* addCategory(action) {
  try {
    yield axios.post(`/api/category/`, { category: action.payload });
    yield put({ type: "GET_CATEGORIES" });
  } catch (error) {
    console.log("error caught in addCategory :>> ", error);
  }
}

function* getFavorites(action) {
  try {
    const results = yield axios.get("/api/favorite");
    yield put({ type: "SET_FAVORITES", payload: results.data });
  } catch (error) {
    console.log("error caught in getFavorites :>> ", error);
  }
}


function* removeFavorite(action) {
  try {
    yield axios.delete(`/api/favorite/${action.payload}`);
    yield put({ type: "GET_FAVORITES" });
  } catch (error) {
    console.log("error caught in removeFavorite :>> ", error);
  }
 }
 
function* addFavorite(action) {
  // console.log('This is action.payload: ', action.payload);
  try {
    yield axios.post('/api/favorite', {url: action.payload});
    yield put({
      type: 'GET_FAVORITES'
    })
  } catch (err) {
    console.log('Error in adding favorite saga: ', err);
  }
}

function* searchGifSaga(action) {
  try {
    console.log("This is action in searchGif: ", action);
    const response = yield axios.get(`/api/search/${action.payload}`);
    yield put({
      type: "SET_SEARCH_RESULTS",
      payload: response.data,
    });
    console.log("this is response in set search results: ", response);
  } catch (err) {
    console.log("Error in catch: ", err);
  }
}

function* deleteCategory(action) {
  try {
    yield axios.delete(`/api/category/${action.payload}`);
    yield put({ type: "GET_CATEGORIES" });
  } catch (error) {
    console.log("error caught in deleteCategory :>> ", error);
  }
}

function gifReducer(state = [], action) {
  if (action.type === "SET_SEARCH_RESULTS") {
    return action.payload;
  } else if (action.type === "FETCH_RESULTS") {
    return state;
  }
  return state;
}

function favoritesReducer(state = [], action) {
  if (action.type === "SET_FAVORITES") {
    return action.payload;
  }
  return state;
}

function categoryReducer(state = [], action) {
  if (action.type === "SET_CATEGORIES") {
    return action.payload;
  }
  return state;
}

const storeInstance = createStore(
  combineReducers({
    gifReducer,
    favorites: favoritesReducer,
    categories: categoryReducer,
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
