import { ActionTypes, LOGIN } from "./action";

const initialstate = {
  token: localStorage.getItem("token") || null,
  tshirtMan: null,
  tshirtWomen: null,
  salesTshirt: null,
  accessories: null,
  sweatshirtMan: null,
  sweatshirtWomen: null,
  pajamasMan: null,
  pajamasWomen: null,
  tshirtKids: null,
  felpaKids: null,
  pajamasKids: null,
  calcioMan: null,
  calcioWomen: null,
  calcioKids: null,
  suitMan: null,
  pantsMan: null,
  suitKids: null,
  suitWomen: null,
  cart: [],
  order: {},
  lastOrder: null,
  error: null,
};
console.log(initialstate);
const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case ActionTypes.EMPTY_CART:
      return {
        ...state,
        cart: [],
      };

    case ActionTypes.ADD_PRODUCT_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case ActionTypes.REMOVE_PRODUCT_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case ActionTypes.ADD_LAST_ORDER:
      return {
        ...state,
        lastOrder: action.payload,
      };

    case ActionTypes.ADD_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case ActionTypes.SET_USER_TOKEN:
      return {
        ...state,
        token: action.payload,
      };

    case ActionTypes.SET_ORDERS:
      return {
        ...state,
        order: action.payload,
      };

    case ActionTypes.SET_SALES_TSHIRT:
      return {
        ...state,
        salesTshirt: action.payload,
      };

    case ActionTypes.SET_TSHIRT_MAN:
      return {
        ...state,
        tshirtMan: action.payload,
      };

    case ActionTypes.SET_SUIT_KIDS:
      return {
        ...state,
        suitKids: action.payload,
      };

    case ActionTypes.SET_CALCIO_KIDS:
      return {
        ...state,
        calcioKids: action.payload,
      };

    case ActionTypes.SET_PANTS_MAN:
      return {
        ...state,
        pantsMan: action.payload,
      };

    case ActionTypes.SET_TSHIRT_WOMEN:
      return {
        ...state,
        tshirtWomen: action.payload,
      };

    case ActionTypes.SET_TSHIRT_KIDS:
      return {
        ...state,
        tshirtKids: action.payload,
      };

    case ActionTypes.SET_FELPA_KIDS:
      return {
        ...state,
        felpaKids: action.payload,
      };

    case ActionTypes.SET_PAJAMAS_KIDS:
      return {
        ...state,
        pajamasKids: action.payload,
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

    case ActionTypes.SET_CALCIO_MAN:
      return {
        ...state,
        calcioMan: action.payload,
      };

    case ActionTypes.SET_CALCIO_WOMEN:
      return {
        ...state,
        calcioWomen: action.payload,
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
