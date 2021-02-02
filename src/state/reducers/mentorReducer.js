import {
  FETCH_MENTOR_SUCCESS,
  FETCH_MENTOR_FAILURE,
  FETCH_MENTOR_START,
  EDIT_MENTOR_START,
  EDIT_MENTOR_SUCCESS,
  EDIT_MENTOR_FAILURE,
  EDIT_MENTOR_MATCHES,
} from '../actions/actionTypes';

//initializes mentee reducer state
const initialState = {
  mentors: [],
};

const mentorReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MENTOR_START:
      return { ...state };
    case FETCH_MENTOR_SUCCESS:
      return {
        ...state,
        mentors: action.payload,
      };
    case FETCH_MENTOR_FAILURE:
      return { ...state };
    case EDIT_MENTOR_START:
      return { ...state };
    case EDIT_MENTOR_SUCCESS:
      return { ...state };
    case EDIT_MENTOR_MATCHES:
      return { ...state };
    case EDIT_MENTOR_FAILURE:
      return { ...state };
    default:
      return state;
  }
};

export default mentorReducer;
