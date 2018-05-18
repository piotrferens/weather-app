import { ofType, combineEpics } from "redux-observable";
import { mergeMap } from "rxjs/operators";

import * as actions from "../actions/actions";
import { http } from "../http";

const fetchDataEpic = action$ =>
  action$.pipe(
    ofType(actions.FETCH_DATA),
    mergeMap(() =>
      http
        .get()
        .then(actions.fetchDataFulfilled)
        .catch(actions.fetchDataRejected)
    )
  );

export default combineEpics(fetchDataEpic);
