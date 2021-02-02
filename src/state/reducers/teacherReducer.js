import {
  FETCH_TEACHER_PROFILE,
  EDIT_TEACHER_START,
  EDIT_TEACHER_SUCCESS,
  EDIT_TEACHER_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  teacherProfile: '',
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TEACHER_PROFILE:
      return { ...state, teacherProfile: action.payload };

    case EDIT_TEACHER_START:
      return { ...state };
    case EDIT_TEACHER_SUCCESS:
      return { ...state };
    case EDIT_TEACHER_FAILURE:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default reducer;
