// action types
import {
  FETCH_MENTEE_SUCCESS,
  FETCH_MENTEE_FAILURE,
  FETCH_MENTEE_START,
  EDIT_MENTEE_START,
  EDIT_MENTEE_SUCCESS,
  EDIT_MENTEE_MATCHES,
  EDIT_MENTEE_FAILURE,
  ADD_MENTEE_START,
  ADD_MENTEE_SUCCESS,
  ADD_MENTEE_FAILURE,
} from '../actions/actionTypes';

//initializes mentee reducer state
const initialState = {
  mentees: [],
  newMentee: null,
  updatedMentee: null,
  error: '',
};

const menteeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MENTEE_START:
      return { ...state };
    case FETCH_MENTEE_SUCCESS:
      return {
        ...state,
        mentees: action.payload,
      };
    case FETCH_MENTEE_FAILURE:
      return { ...state };

    case EDIT_MENTEE_START:
      return { ...state };
    case EDIT_MENTEE_SUCCESS:
      return { ...state };
    case EDIT_MENTEE_MATCHES:
      return {
        ...state,
        mentees: state.mentees.map(eachMentee => {
          if (eachMentee.id === action.payload.id) {
            return action.payload;
          }
          return eachMentee;
        }),
      };
    case EDIT_MENTEE_FAILURE:
      return { ...state };

    case ADD_MENTEE_START:
      return { ...state };
    case ADD_MENTEE_SUCCESS:
      return { ...state, newMentee: action.payload };
    case ADD_MENTEE_FAILURE:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default menteeReducer;
