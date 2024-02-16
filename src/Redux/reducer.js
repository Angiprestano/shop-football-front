import { ActionTypes, LOGIN } from "./action";

const initialstate = {
  token: localStorage.getItem("token") || null,
  tshirtMan: null,
  accessories: null,
  sweatshirtMan: null,
  sweatshirtWomen: null,
  pajamasMan: null,
  pajamasWomen: null,
  suitMan: null,
  suitWomen: null,
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
    case ActionTypes.SET_SWEATSHIRT_MAN:
      return {
        ...state,
        sweatshirtMan: action.payload,
      };
    case ActionTypes.SET_SWEATSHIRT_WOMEN:
      return {
        ...state,
        sweatshirtWomen: action.payload,
      };
    case ActionTypes.SET_PAJAMAS_MAN:
      return {
        ...state,
        pajamasMan: action.payload,
      };
    case ActionTypes.SET_PAJAMAS_WOMEN:
      return {
        ...state,
        pajamasWomen: action.payload,
      };

    case ActionTypes.SET_SUIT_MAN:
      return {
        ...state,
        suitMan: action.payload,
      };

    case ActionTypes.SET_SUIT_WOMEN:
      return {
        ...state,
        suitWomen: action.payload,
      };

    case ActionTypes.SET_ACCESSORIES:
      return {
        ...state,
        accessories: action.payload,
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
