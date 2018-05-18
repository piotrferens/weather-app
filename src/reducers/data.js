import { FETCH_DATA_FULFILLED, FETCH_DATA_REJECTED } from "../actions/actions";

export function data(state = [], action) {
  switch (action.type) {
    case FETCH_DATA_REJECTED:
      return [];
    case FETCH_DATA_FULFILLED:
      return action.payload.city;
    default:
      return state;
  }
}
