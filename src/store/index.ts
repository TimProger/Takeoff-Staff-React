import {applyMiddleware, legacy_createStore as createStore} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./Reducers";
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

