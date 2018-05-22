import { combineReducers } from "redux";

import { SEARCH_CITY_FULFILLED, SEARCH_CITY_REJECTED, SET_CITY_NAME } from "../actions/actions";

function cityName(state = "", action) {
    switch (action.type) {
        case SET_CITY_NAME:
            return action.payload;
        default:
            return state;
    }
}

function cityData(state = {}, action) {
    switch (action.type) {
        case SEARCH_CITY_REJECTED:
            return {};
        case SEARCH_CITY_FULFILLED:
            return action.payload;
        default:
            return state;
    }
}

export const data = combineReducers({
    cityName,
    cityData,
});
