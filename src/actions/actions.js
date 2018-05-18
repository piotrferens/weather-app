export const FETCH_DATA = "FETCH_DATA";
export const fetchData = () => ({
  type: FETCH_DATA
});

export const FETCH_DATA_FULFILLED = "FETCH_DATA_FULFILLED";
export const fetchDataFulfilled = payload => ({
  type: FETCH_DATA_FULFILLED,
  payload
});

export const FETCH_DATA_REJECTED = "FETCH_DATA_REJECTED";
export const fetchDataRejected = () => ({
  type: FETCH_DATA_REJECTED
});
