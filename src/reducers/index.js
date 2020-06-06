const initialState = {
  aparts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'APARTS_LOADED':
      return {
        aparts: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
