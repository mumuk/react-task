import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk"
import React from 'react';


import reposReducer from "../reducers/reposReducer"
import filtersReducer from "../reducers/filters"
import {composeWithDevTools} from "redux-devtools-extension"


const rootReducer = combineReducers({
  repos: reposReducer,
  filters: filtersReducer
})

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)))
