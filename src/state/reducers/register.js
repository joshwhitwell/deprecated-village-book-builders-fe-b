import { REGISTER_SUCCESS, REGISTER_FAILURE } from '../actions/actionTypes';

const initialState = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  error: '',
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return { ...state, email: action.payload, password: action.payload };

    case REGISTER_FAILURE:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default registerReducer;
