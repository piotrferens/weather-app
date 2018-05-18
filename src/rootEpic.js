import { combineEpics } from "redux-observable";

import fetchDataEpic from "./epics";

export const rootEpic = combineEpics(fetchDataEpic);
