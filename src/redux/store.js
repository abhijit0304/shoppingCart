// import { createStoreHook } from "react-redux";
import {createStore } from 'redux';
import rootReducers from "./reducer";

const store = createStore(rootReducers);

export default store;
