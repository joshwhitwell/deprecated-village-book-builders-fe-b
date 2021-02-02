// Reducer file for Headmaster
import {
  FETCH_HEADMASTER_SCHOOLS,
  FETCH_VILLAGE,
  FETCH_HEADMASTER_PROFILE,
  EDIT_HEADMASTER_START,
  EDIT_HEADMASTER_SUCCESS,
  EDIT_HEADMASTER_FAILURE,
  FETCH_PENDING_TEACHERS,
  PATCH_TEACHER_STATUS,
  PATCH_SCHOOL_TEACHERID,
  FETCH_MENTEE_SUCCESS,
  FETCH_MENTEE_FAILURE,
  FETCH_MENTEE_START,
} from '../actions/actionTypes';

const initialState = {
  villageData: {},
  schoolData: [],
  headmasterProfile: '',
  mentees: [],
  pendingTeachers: [],
  err: '',
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

    case EDIT_HEADMASTER_START:
      return { ...state };
    case EDIT_HEADMASTER_SUCCESS:
      return { ...state, headmasterProfile: action.payload };
    case EDIT_HEADMASTER_FAILURE:
      return { ...state, err: action.payload };

    case FETCH_PENDING_TEACHERS:
      return { ...state, pendingTeachers: action.payload };
    case PATCH_TEACHER_STATUS:
      return { ...state };
    case PATCH_SCHOOL_TEACHERID:
      return { ...state };
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
