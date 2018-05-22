import { createSelector } from "reselect";

export const temperatureSelector = createSelector(
    state => state.data.cityData,
    cityData => cityData.main && (cityData.main.temp - 273.15).toFixed(2),
);
