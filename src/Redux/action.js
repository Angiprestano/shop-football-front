export const ActionTypes = {
  // UOMO
  SET_TSHIRT_MAN: "SET_TSHIRT_MAN",
  SET_SWEATSHIRT_MAN: "SET_SWEATSHIRT_MAN",
  SET_SUIT_MAN: "SET_SUIT_MAN",
  SET_PANTS_MAN: "SET_PANTS_MAN",
  SET_PAJAMAS_MAN: "SET_PAJAMAS_MAN",
  SET_CALCIO_MAN: "SET_CALCIO_MAN",

  // BAMBINO
  SET_TSHIRT_KIDS: "SET_TSHIRT_KIDS",
  SET_FELPA_KIDS: "SET_FELPA_KIDS",
  SET_PAJAMAS_KIDS: "SET_PAJAMAS_KIDS",
  SET_SUIT_KIDS: "SET_SUIT_KIDS",
  SET_CALCIO_KIDS: "SET_CALCIO_KIDS",

  // DONNA
  SET_TSHIRT_WOMEN: "SET_TSHIRT_WOMEN",
  SET_CALCIO_WOMEN: "SET_CALCIO_WOMEN",
  SET_SWEATSHIRT_WOMEN: "SET_SWEATSHIRT_WOMEN",
  SET_PAJAMAS_WOMEN: "SET_PAJAMAS_WOMEN",
  SET_SUIT_WOMEN: "SET_SUIT_WOMEN",
  SET_ACCESSORIES: "SET_ACCESSORIES",

  // CARRELLO
  ADD_CART: "ADD_CART",
  SET_ORDERS: "SET_ORDERS",
  ADD_ORDER: "ADD_ORDER",
  ADD_LAST_ORDER: "ADD_LAST_ORDER",
  EMPTY_CART: "EMPTY_CART",
  ADD_PRODUCT_TO_CART: "ADD_PRODUCT_TO_CART",
  REMOVE_TO_CART: "REMOVE_TO_CART",

  SET_USER_TOKEN: "SET_USER_TOKEN",
  LOGOUT_USER: "LOGOUT_USER",
  SET_ERROR: "SET_ERROR",
  SET_SALES_TSHIRT: "SET_SALES_TSHIRT",
};

export const setError = (errorMessage) => ({
  type: ActionTypes.SET_ERROR,
  payload: errorMessage,
});

export const setOrders = (orders) => ({
  type: ActionTypes.SET_ORDERS,
  payload: orders,
});

export const addProductToCart = (product) => {
  return {
    type: ActionTypes.ADD_PRODUCT_TO_CART,
    payload: product,
  };
};

export const aggiungiOrdineAlCarrello = (ordine) => ({
  type: ActionTypes.AGGIUNGI_ORDINE_AL_CARRELLO,
  payload: ordine,
});

export const logoutUser = () => ({
  type: ActionTypes.LOGOUT_USER,
});

export const setUserToken = (token) => ({
  type: ActionTypes.SET_USER_TOKEN,
  payload: token,
});
//2)
export const setTshirtMan = (tshirtMan) => ({
  type: ActionTypes.SET_TSHIRT_MAN,
  payload: tshirtMan,
});

export const setPantsMan = (pantsMan) => ({
  type: ActionTypes.SET_PANTS_MAN,
  payload: pantsMan,
});

export const setSalesTshirt = (salesTshirt) => ({
  type: ActionTypes.SET_SALES_TSHIRT,
  payload: salesTshirt,
});

export const setSuitKids = (suitKids) => ({
  type: ActionTypes.SET_SUIT_KIDS,
  payload: suitKids,
});

export const setCalcioKids = (calcioKids) => ({
  type: ActionTypes.SET_CALCIO_KIDS,
  payload: calcioKids,
});

export const setSweatshirtMan = (sweatshirtMan) => ({
  type: ActionTypes.SET_SWEATSHIRT_MAN,
  payload: sweatshirtMan,
});

export const setSweatshirtWomen = (sweatshirtWomen) => ({
  type: ActionTypes.SET_SWEATSHIRT_WOMEN,
  payload: sweatshirtWomen,
});

export const setPajamasMan = (pajamasMan) => ({
  type: ActionTypes.SET_PAJAMAS_MAN,
  payload: pajamasMan,
});

export const setPajamasWomen = (pajamasWomen) => ({
  type: ActionTypes.SET_PAJAMAS_WOMEN,
  payload: pajamasWomen,
});

export const setSuitMan = (suitMan) => ({
  type: ActionTypes.SET_SUIT_MAN,
  payload: suitMan,
});

export const setFelpaKids = (felpaKids) => ({
  type: ActionTypes.SET_FELPA_KIDS,
  payload: felpaKids,
});

export const setPajamasKids = (pajamasKids) => ({
  type: ActionTypes.SET_PAJAMAS_KIDS,
  payload: pajamasKids,
});

export const setTshirtWomen = (tshirtWomen) => ({
  type: ActionTypes.SET_TSHIRT_WOMEN,
  payload: tshirtWomen,
});

export const setTshirtKids = (tshirtKids) => ({
  type: ActionTypes.SET_TSHIRT_KIDS,
  payload: tshirtKids,
});

export const setCalcioMan = (calcioMan) => ({
  type: ActionTypes.SET_CALCIO_MAN,
  payload: calcioMan,
});

export const setCalcioWomen = (calcioWomen) => ({
  type: ActionTypes.SET_CALCIO_WOMEN,
  payload: calcioWomen,
});

export const setSuitWomen = (suitWomen) => ({
  type: ActionTypes.SET_SUIT_WOMEN,
  payload: suitWomen,
});

export const setAccessories = (accessories) => ({
  type: ActionTypes.SET_ACCESSORIES,
  payload: accessories,
});

export const LOGIN = "LOGIN";

export const login = (body) => {
  return async (dispatch) => {
    const URL = "http://localhost:3001/auth/login";
    try {
      const res = await fetch(URL, {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: LOGIN,
          payload: data.token,
        });
        console.log(data);
        localStorage.setItem("token", data.token);
      } else {
        throw new Error("Something went wrong.");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addOrderCart = (orders) => ({
  type: ActionTypes.ADD_ORDER,
  payload: orders,
});

export const getTshirtMan = (token) => async (dispatch) => {
  const URL = "http://localhost:3001/products/tshirts/man";
  try {
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      dispatch(setTshirtMan(data));
      console.log("Dati ricevuti:", data);
      return data;
    } else {
      const errorMessage = await response.text();
      if (response.status === 401) {
        dispatch({
          type: ActionTypes.SET_ERROR,
          payload:
            "Token JWT non valido o scaduto. Effettua di nuovo l'accesso.",
        });
      } else {
        dispatch({
          type: ActionTypes.SET_ERROR,
          payload:
            errorMessage ||
            "Errore durante la richiesta dei dati delle magliette uomo",
        });
      }
      throw new Error(
        errorMessage ||
          "Errore durante la richiesta dei dati delle magliette uomo"
      );
    }
  } catch (error) {
    console.error("Errore:", error);

    dispatch({
      type: ActionTypes.SET_ERROR,
      payload:
        error.message ||
        "Errore durante la richiesta dei dati delle magliette uomo",
    });
  }
};

export const getOrders = (token) => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:3001/orders/user", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Errore durante il recupero degli ordini");
    }

    const orders = await response.json();
    dispatch({ type: "SET_ORDERS", payload: orders });
  } catch (error) {
    console.error("Errore durante il recupero degli ordini:", error);
  }
};

export const addOrder = (token, body) => {
  return async () => {
    const URL = "http://localhost:3001/orders/creatOrder";
    try {
      const res = await fetch(URL, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);

        return data.idOrder;
      } else {
        throw new Error("Something went wrong.");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getSweatshirtMan = (token) => async (dispatch) => {
  const URL = "http://localhost:3001/products/sweatshirts/man";
  try {
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      dispatch(setSweatshirtMan(data));
      console.log("Dati ricevuti:", data);
      return data;
    } else {
      const errorMessage = await response.text();
      if (response.status === 401) {
        dispatch({
          type: ActionTypes.SET_ERROR,
          payload:
            "Token JWT non valido o scaduto. Effettua di nuovo l'accesso.",
        });
      } else {
        dispatch({
          type: ActionTypes.SET_ERROR,
          payload:
            errorMessage ||
            "Errore durante la richiesta dei dati delle magliette uomo",
        });
      }
      throw new Error(
        errorMessage ||
          "Errore durante la richiesta dei dati delle magliette uomo"
      );
    }
  } catch (error) {
    console.error("Errore:", error);

    dispatch({
      type: ActionTypes.SET_ERROR,
      payload:
        error.message ||
        "Errore durante la richiesta dei dati delle magliette uomo",
    });
  }
};

export const getSweatshirtWomen = (token) => async (dispatch) => {
  const URL = "http://localhost:3001/products/sweatshirts/women";
  try {
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      dispatch(setSweatshirtWomen(data));
      console.log("Dati ricevuti:", data);
      return data;
    } else {
      const errorMessage = await response.text();
      if (response.status === 401) {
        dispatch({
          type: ActionTypes.SET_ERROR,
          payload:
            "Token JWT non valido o scaduto. Effettua di nuovo l'accesso.",
        });
      } else {
        dispatch({
          type: ActionTypes.SET_ERROR,
          payload:
            errorMessage ||
            "Errore durante la richiesta dei dati delle magliette uomo",
        });
      }
      throw new Error(
        errorMessage ||
          "Errore durante la richiesta dei dati delle magliette uomo"
      );
    }
  } catch (error) {
    console.error("Errore:", error);

    dispatch({
      type: ActionTypes.SET_ERROR,
      payload:
        error.message ||
        "Errore durante la richiesta dei dati delle magliette uomo",
    });
  }
};

export const getPajamasMan = (token) => async (dispatch) => {
  const URL = "http://localhost:3001/products/pajamas/man";
  try {
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      dispatch(setPajamasMan(data));
      console.log("Dati ricevuti:", data);
      return data;
    } else {
      const errorMessage = await response.text();
      if (response.status === 401) {
        dispatch({
          type: ActionTypes.SET_ERROR,
          payload:
            "Token JWT non valido o scaduto. Effettua di nuovo l'accesso.",
        });
      } else {
        dispatch({
          type: ActionTypes.SET_ERROR,
          payload:
            errorMessage ||
            "Errore durante la richiesta dei dati delle magliette uomo",
        });
      }
      throw new Error(
        errorMessage ||
          "Errore durante la richiesta dei dati delle magliette uomo"
      );
    }
  } catch (error) {
    console.error("Errore:", error);

    dispatch({
      type: ActionTypes.SET_ERROR,
      payload:
        error.message ||
        "Errore durante la richiesta dei dati delle magliette uomo",
    });
  }
};

export const getPantsMan = (token) => async (dispatch) => {
  const URL = "http://localhost:3001/products/pants/man";
  try {
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      dispatch(setPantsMan(data));
      console.log("Dati ricevuti:", data);
      return data;
    } else {
      const errorMessage = await response.text();
      if (response.status === 401) {
        dispatch({
          type: ActionTypes.SET_ERROR,
          payload:
            "Token JWT non valido o scaduto. Effettua di nuovo l'accesso.",
        });
      } else {
        dispatch({
          type: ActionTypes.SET_ERROR,
          payload:
            errorMessage ||
            "Errore durante la richiesta dei dati delle magliette uomo",
        });
      }
      throw new Error(
        errorMessage ||
          "Errore durante la richiesta dei dati delle magliette uomo"
      );
    }
  } catch (error) {
    console.error("Errore:", error);

    dispatch({
      type: ActionTypes.SET_ERROR,
      payload:
        error.message ||
        "Errore durante la richiesta dei dati delle magliette uomo",
    });
  }
};

export const getPajamasWomen = (token) => async (dispatch) => {
  const URL = "http://localhost:3001/products/pajamas/women";
  try {
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      dispatch(setPajamasWomen(data));
      console.log("Dati ricevuti:", data);
      return data;
    } else {
      const errorMessage = await response.text();
      if (response.status === 401) {
        dispatch({
          type: ActionTypes.SET_ERROR,
          payload:
            "Token JWT non valido o scaduto. Effettua di nuovo l'accesso.",
        });
      } else {
        dispatch({
          type: ActionTypes.SET_ERROR,
          payload:
            errorMessage ||
            "Errore durante la richiesta dei dati delle magliette uomo",
        });
      }
      throw new Error(
        errorMessage ||
          "Errore durante la richiesta dei dati delle magliette uomo"
      );
    }
  } catch (error) {
    console.error("Errore:", error);

    dispatch({
      type: ActionTypes.SET_ERROR,
      payload:
        error.message ||
        "Errore durante la richiesta dei dati delle magliette uomo",
    });
  }
};

export const getCalcioWomen = (token) => async (dispatch) => {
  const URL = "http://localhost:3001/products/calcio/women";
  try {
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      dispatch(setCalcioWomen(data));
      console.log("Dati ricevuti:", data);
      return data;
    } else {
      const errorMessage = await response.text();
      if (response.status === 401) {
        dispatch({
          type: ActionTypes.SET_ERROR,
          payload:
            "Token JWT non valido o scaduto. Effettua di nuovo l'accesso.",
        });
      } else {
        dispatch({
          type: ActionTypes.SET_ERROR,
          payload:
            errorMessage ||
            "Errore durante la richiesta dei dati delle magliette uomo",
        });
      }
      throw new Error(
        errorMessage ||
          "Errore durante la richiesta dei dati delle magliette uomo"
      );
    }
  } catch (error) {
    console.error("Errore:", error);

    dispatch({
      type: ActionTypes.SET_ERROR,
      payload:
        error.message ||
        "Errore durante la richiesta dei dati delle magliette uomo",
    });
  }
};

export const getCalcioKids = (token) => async (dispatch) => {
  const URL = "http://localhost:3001/products/calcio/kids";
  try {
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      dispatch(setCalcioKids(data));
      console.log("Dati ricevuti:", data);
      return data;
    } else {
      const errorMessage = await response.text();
      if (response.status === 401) {
        dispatch({
          type: ActionTypes.SET_ERROR,
          payload:
            "Token JWT non valido o scaduto. Effettua di nuovo l'accesso.",
        });
      } else {
        dispatch({
          type: ActionTypes.SET_ERROR,
          payload:
            errorMessage ||
            "Errore durante la richiesta dei dati delle magliette uomo",
        });
      }
      throw new Error(
        errorMessage ||
          "Errore durante la richiesta dei dati delle magliette uomo"
      );
    }
  } catch (error) {
    console.error("Errore:", error);

    dispatch({
      type: ActionTypes.SET_ERROR,
      payload:
        error.message ||
        "Errore durante la richiesta dei dati delle magliette uomo",
    });
  }
};

export const getCalcioMan = (token) => async (dispatch) => {
  const URL = "http://localhost:3001/products/calcio/man";
  try {
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      dispatch(setCalcioMan(data));
      console.log("Dati ricevuti:", data);
      return data;
    } else {
      const errorMessage = await response.text();
      if (response.status === 401) {
        dispatch({
          type: ActionTypes.SET_ERROR,
          payload:
            "Token JWT non valido o scaduto. Effettua di nuovo l'accesso.",
        });
      } else {
        dispatch({
          type: ActionTypes.SET_ERROR,
          payload:
            errorMessage ||
            "Errore durante la richiesta dei dati delle magliette uomo",
        });
      }
      throw new Error(
        errorMessage ||
          "Errore durante la richiesta dei dati delle magliette uomo"
      );
    }
  } catch (error) {
    console.error("Errore:", error);

    dispatch({
      type: ActionTypes.SET_ERROR,
      payload:
        error.message ||
        "Errore durante la richiesta dei dati delle magliette uomo",
    });
  }
};

export const getSuitMan = (token) => async (dispatch) => {
  const URL = "http://localhost:3001/products/suit/man";
  try {
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      dispatch(setSuitMan(data));
      console.log("Dati ricevuti:", data);
      return data;
    } else {
      const errorMessage = await response.text();
      if (response.status === 401) {
        dispatch({
          type: ActionTypes.SET_ERROR,
          payload:
            "Token JWT non valido o scaduto. Effettua di nuovo l'accesso.",
        });
      } else {
        dispatch({
          type: ActionTypes.SET_ERROR,
          payload:
            errorMessage ||
            "Errore durante la richiesta dei dati delle magliette uomo",
        });
      }
      throw new Error(
        errorMessage ||
          "Errore durante la richiesta dei dati delle magliette uomo"
      );
    }
  } catch (error) {
    console.error("Errore:", error);

    dispatch({
      type: ActionTypes.SET_ERROR,
      payload:
        error.message ||
        "Errore durante la richiesta dei dati delle magliette uomo",
    });
  }
};

export const getSuitWomen = (token) => async (dispatch) => {
  const URL = "http://localhost:3001/products/suit/women";
  try {
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      dispatch(setSuitWomen(data));
      console.log("Dati ricevuti:", data);
      return data;
    } else {
      const errorMessage = await response.text();
      if (response.status === 401) {
        dispatch({
          type: ActionTypes.SET_ERROR,
          payload:
            "Token JWT non valido o scaduto. Effettua di nuovo l'accesso.",
        });
      } else {
        dispatch({
          type: ActionTypes.SET_ERROR,
          payload:
            errorMessage ||
            "Errore durante la richiesta dei dati delle magliette uomo",
        });
      }
      throw new Error(
        errorMessage ||
          "Errore durante la richiesta dei dati delle magliette uomo"
      );
    }
  } catch (error) {
    console.error("Errore:", error);

    dispatch({
      type: ActionTypes.SET_ERROR,
      payload:
        error.message ||
        "Errore durante la richiesta dei dati delle magliette uomo",
    });
  }
};

export const getSuitKids = (token) => async (dispatch) => {
  const URL = "http://localhost:3001/products/suit/kids";
  try {
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      dispatch(setSuitKids(data));
      console.log("Dati ricevuti:", data);
      return data;
    } else {
      const errorMessage = await response.text();
      if (response.status === 401) {
        dispatch({
          type: ActionTypes.SET_ERROR,
          payload:
            "Token JWT non valido o scaduto. Effettua di nuovo l'accesso.",
        });
      } else {
        dispatch({
          type: ActionTypes.SET_ERROR,
          payload:
            errorMessage ||
            "Errore durante la richiesta dei dati delle magliette uomo",
        });
      }
      throw new Error(
        errorMessage ||
          "Errore durante la richiesta dei dati delle magliette uomo"
      );
    }
  } catch (error) {
    console.error("Errore:", error);

    dispatch({
      type: ActionTypes.SET_ERROR,
      payload:
        error.message ||
        "Errore durante la richiesta dei dati delle magliette uomo",
    });
  }
};

export const getTshirtWomen = (token) => async (dispatch) => {
  const URL = "http://localhost:3001/products/tshirts/women";
  try {
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      dispatch(setTshirtWomen(data));
      console.log("Dati ricevuti:", data);
      return data;
    } else {
      const errorMessage = await response.text();
      if (response.status === 401) {
        dispatch({
          type: ActionTypes.SET_ERROR,
          payload:
            "Token JWT non valido o scaduto. Effettua di nuovo l'accesso.",
        });
      } else {
        dispatch({
          type: ActionTypes.SET_ERROR,
          payload:
            errorMessage ||
            "Errore durante la richiesta dei dati delle magliette uomo",
        });
      }
      throw new Error(
        errorMessage ||
          "Errore durante la richiesta dei dati delle magliette uomo"
      );
    }
  } catch (error) {
    console.error("Errore:", error);

    dispatch({
      type: ActionTypes.SET_ERROR,
      payload:
        error.message ||
        "Errore durante la richiesta dei dati delle magliette uomo",
    });
  }
};

export const getPajamasKids = (token) => async (dispatch) => {
  const URL = "http://localhost:3001/products/pajamas/kids";
  try {
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      dispatch(setPajamasKids(data));
      console.log("Dati ricevuti:", data);
      return data;
    } else {
      const errorMessage = await response.text();
      if (response.status === 401) {
        dispatch({
          type: ActionTypes.SET_ERROR,
          payload:
            "Token JWT non valido o scaduto. Effettua di nuovo l'accesso.",
        });
      } else {
        dispatch({
          type: ActionTypes.SET_ERROR,
          payload:
            errorMessage ||
            "Errore durante la richiesta dei dati delle magliette uomo",
        });
      }
      throw new Error(
        errorMessage ||
          "Errore durante la richiesta dei dati delle magliette uomo"
      );
    }
  } catch (error) {
    console.error("Errore:", error);

    dispatch({
      type: ActionTypes.SET_ERROR,
      payload:
        error.message ||
        "Errore durante la richiesta dei dati delle magliette uomo",
    });
  }
};

export const getTshirtKids = (token) => async (dispatch) => {
  const URL = "http://localhost:3001/products/tshirt/kids";
  try {
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      dispatch(setTshirtKids(data));
      console.log("Dati ricevuti:", data);
      return data;
    } else {
      const errorMessage = await response.text();
      if (response.status === 401) {
        dispatch({
          type: ActionTypes.SET_ERROR,
          payload:
            "Token JWT non valido o scaduto. Effettua di nuovo l'accesso.",
        });
      } else {
        dispatch({
          type: ActionTypes.SET_ERROR,
          payload:
            errorMessage ||
            "Errore durante la richiesta dei dati delle magliette uomo",
        });
      }
      throw new Error(
        errorMessage ||
          "Errore durante la richiesta dei dati delle magliette uomo"
      );
    }
  } catch (error) {
    console.error("Errore:", error);

    dispatch({
      type: ActionTypes.SET_ERROR,
      payload:
        error.message ||
        "Errore durante la richiesta dei dati delle magliette uomo",
    });
  }
};

export const getSalesTshirt = (token) => async (dispatch) => {
  const URL = "http://localhost:3001/products/sale/tshirt";
  try {
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      dispatch(setSalesTshirt(data));
      console.log("Dati ricevuti:", data);
      return data;
    } else {
      const errorMessage = await response.text();
      if (response.status === 401) {
        dispatch({
          type: ActionTypes.SET_ERROR,
          payload:
            "Token JWT non valido o scaduto. Effettua di nuovo l'accesso.",
        });
      } else {
        dispatch({
          type: ActionTypes.SET_ERROR,
          payload:
            errorMessage ||
            "Errore durante la richiesta dei dati delle magliette uomo",
        });
      }
      throw new Error(
        errorMessage ||
          "Errore durante la richiesta dei dati delle magliette uomo"
      );
    }
  } catch (error) {
    console.error("Errore:", error);

    dispatch({
      type: ActionTypes.SET_ERROR,
      payload:
        error.message ||
        "Errore durante la richiesta dei dati delle magliette uomo",
    });
  }
};

export const getFelpaKids = (token) => async (dispatch) => {
  const URL = "http://localhost:3001/products/felpa/kids";
  try {
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      dispatch(setFelpaKids(data));
      console.log("Dati ricevuti:", data);
      return data;
    } else {
      const errorMessage = await response.text();
      if (response.status === 401) {
        dispatch({
          type: ActionTypes.SET_ERROR,
          payload:
            "Token JWT non valido o scaduto. Effettua di nuovo l'accesso.",
        });
      } else {
        dispatch({
          type: ActionTypes.SET_ERROR,
          payload:
            errorMessage ||
            "Errore durante la richiesta dei dati delle magliette uomo",
        });
      }
      throw new Error(
        errorMessage ||
          "Errore durante la richiesta dei dati delle magliette uomo"
      );
    }
  } catch (error) {
    console.error("Errore:", error);

    dispatch({
      type: ActionTypes.SET_ERROR,
      payload:
        error.message ||
        "Errore durante la richiesta dei dati delle magliette uomo",
    });
  }
};

export const getAccessories = (token) => async (dispatch) => {
  const URL = "http://localhost:3001/products/accessories";
  try {
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      dispatch(setAccessories(data));
      console.log("Dati ricevuti:", data);
      return data;
    } else {
      const errorMessage = await response.text();
      if (response.status === 401) {
        dispatch({
          type: ActionTypes.SET_ERROR,
          payload:
            "Token JWT non valido o scaduto. Effettua di nuovo l'accesso.",
        });
      } else {
        dispatch({
          type: ActionTypes.SET_ERROR,
          payload:
            errorMessage ||
            "Errore durante la richiesta dei dati delle magliette uomo",
        });
      }
      throw new Error(
        errorMessage ||
          "Errore durante la richiesta dei dati delle magliette uomo"
      );
    }
  } catch (error) {
    console.error("Errore:", error);

    dispatch({
      type: ActionTypes.SET_ERROR,
      payload:
        error.message ||
        "Errore durante la richiesta dei dati delle magliette uomo",
    });
  }
};
