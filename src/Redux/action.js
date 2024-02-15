export const ActionTypes = {
  SET_TSHIRT_MAN: "SET_TSHIRT_MAN",
  SET_USER_TOKEN: "SET_USER_TOKEN",
  LOGOUT_USER: "LOGOUT_USER",
  SET_ERROR: "SET_ERROR",
};

export const setError = (errorMessage) => ({
  type: ActionTypes.SET_ERROR,
  payload: errorMessage,
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
