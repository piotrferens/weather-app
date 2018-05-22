import { ofType, combineEpics } from "redux-observable";
import { switchMap, debounceTime, filter } from "rxjs/operators";

import * as actions from "../actions/actions";
import { http } from "../http";

const fetchDataEpic = action$ =>
    action$.pipe(
        ofType(actions.SET_CITY_NAME),
        filter(action => action.payload.trim()),
        debounceTime(300),
        switchMap(action =>
            http
                .get("", { params: { q: action.payload } })
                .then(actions.searchCityFulfilled)
                .catch(actions.searchCityRejected),
        ),
    );

export default combineEpics(fetchDataEpic);
