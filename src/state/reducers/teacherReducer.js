import { FETCH_TEACHER_PROFILE } from '../actions/actionTypes';

const initialState = {
  teacherProfile: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TEACHER_PROFILE:
      return { ...state, teacherProfile: action.payload };
    default:
      return state;
  }
};

export default reducer;
