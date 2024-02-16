import { ActionTypes, LOGIN } from "./action";

const initialstate = {
  token: localStorage.getItem("token") || null,
  tshirtMan: null,
  error: null,
};
console.log(initialstate);
const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case ActionTypes.SET_USER_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case ActionTypes.SET_TSHIRT_MAN:
      return {
        ...state,
        tshirtMan: action.payload,
      };
    case ActionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case LOGIN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
