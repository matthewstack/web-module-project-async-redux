import axios from "axios";

export const getFacts = () => {
  return (dispatch) => {
    dispatch(fetchStart());

    axios
      .get("https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1")
      .then((res) => {
        console.log(res.data);
        dispatch(fetchSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchError(err));
      });
  };
};

export const FETCH_START = "FETCH_START";

export const fetchStart = () => {
  return { type: FETCH_START };
};

export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const fetchSuccess = (dogFacts) => {
  return { type: FETCH_SUCCESS, payload: dogFacts };
};

export const FETCH_ERROR = "FETCH_ERROR";

export const fetchError = (errorMessage) => {
  return { type: FETCH_ERROR, payload: errorMessage };
};
