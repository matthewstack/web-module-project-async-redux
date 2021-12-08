import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from "./../actions";

const initialState = {
  dogFacts: [
    {
      fact: "",
    },
  ],
  isFetching: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        dogFacts: [],
        isFetching: true,
        error: "",
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        dogFacts: action.payload,
        isFetching: false,
        error: "",
      };
    case FETCH_ERROR:
      return {
        ...state,
        dogFacts: [],
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
