const initialState = {
  aparts: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'APARTS_LOADED':
      return {
        aparts: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
