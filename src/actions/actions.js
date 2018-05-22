export const SET_CITY_NAME = "SET_CITY_NAME";
export const setCityName = payload => ({
    type: SET_CITY_NAME,
    payload,
});

export const SEARCH_CITY = "SEARCH_CITY";
export const searchCity = payload => ({
    type: SEARCH_CITY,
    payload,
});

export const SEARCH_CITY_FULFILLED = "SEARCH_CITY_FULFILLED";
export const searchCityFulfilled = payload => ({
    type: SEARCH_CITY_FULFILLED,
    payload,
});

export const SEARCH_CITY_REJECTED = "SEARCH_CITY_REJECTED";
export const searchCityRejected = () => ({
    type: SEARCH_CITY_REJECTED,
});
