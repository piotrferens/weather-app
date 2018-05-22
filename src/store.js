import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";

import { rootReducer } from "./rootReducer";
import { rootEpic } from "./rootEpic";

const epicMiddleware = createEpicMiddleware(rootEpic);

const middleware = [epicMiddleware];

const reduxDevtool =
    process.env.NODE_ENV === "development" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : compose;

const enhancer = reduxDevtool(applyMiddleware(...middleware));
export const store = createStore(rootReducer, enhancer);
