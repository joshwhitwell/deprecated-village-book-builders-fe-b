// Reducer file for Headmaster

import {
  FETCH_HEADMASTER_SCHOOLS,
  FETCH_VILLAGE,
  FETCH_HEADMASTER_PROFILE,
  FETCH_PENDING_TEACHERS,
  FETCH_MENTEE_SUCCESS,
  FETCH_MENTEE_FAILURE,
  FETCH_MENTEE_START,
} from '../actions/actionTypes';

// import { debugLog } from '../../utils/debugMode.js';

const initialState = {
  villageData: {},
  schoolData: [],
  headmasterProfile: '',
  mentees: [],
  pendingTeachers: [],
};
// Fetch school data for headmaster
const reducer = (state = initialState, action) => {
  // console.log('HEADMASTERREDUCER.js, action type & payload:', action.type, action.payload);
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
    case FETCH_PENDING_TEACHERS:
      return { ...state, pendingTeachers: action.payload };
    case FETCH_MENTEE_SUCCESS:
      return {
        ...state,
        mentees: action.payload,
      };
    case FETCH_MENTEE_START:
      return { ...state };
    case FETCH_MENTEE_FAILURE:
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
