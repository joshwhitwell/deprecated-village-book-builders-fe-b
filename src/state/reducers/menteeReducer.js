const initialState = {
  mentees: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_MENTEE_START':
      console.log(action.type, action.payload);
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
