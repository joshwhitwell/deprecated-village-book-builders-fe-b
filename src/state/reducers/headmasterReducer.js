// Reducer file for Headmaster
import {
  FETCH_HEADMASTER_SCHOOLS,
  FETCH_VILLAGE,
  FETCH_HEADMASTER_PROFILE,
} from '../actions/actionTypes';

const initialState = {
  villageData: {},
  schoolData: [],
  headmasterProfile: '',
  mentees: [],
};

// Fetch school data for headmaster
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HEADMASTER_SCHOOLS:
      return { ...state, schoolData: action.payload };
    case FETCH_HEADMASTER_PROFILE:
      return { ...state, headmasterProfile: action.payload };
    case FETCH_VILLAGE:
      return {
        ...state,
        villageData: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
