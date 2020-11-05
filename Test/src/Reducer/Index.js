const initialState = {
    result: [],
    success: false,
    error: false
  };
  
  const asyncReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_DATA_SUCCESS":
        return Object.assign({}, state, {
          result: action.payload,
          success: true,
          error: false
        });
      case "GET_DATA_FAILURE":
        return Object.assign({}, state, {
         result:[],
         success: false,
         error: action.payload
        });
      default:
        return state;
    }
  };
  
  export default asyncReducer;