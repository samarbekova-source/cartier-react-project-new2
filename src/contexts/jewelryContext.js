import React from "react";
import { useReducer } from "react";
import axios from "axios";
import { CASE_GET_JEWELRY } from "../helpers/cases";
import { JEWELRY_API } from "../helpers/consts";

export const jewelryContext = React.createContext();

const INIT_STATE = {
  jewelry: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CASE_GET_JEWELRY:
      return {
        ...state,
        jewelry: action.payload.data,
      };
    default:
      return state;
  }
};

const JewelryContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  async function getJewelry() {
    let result = await axios(JEWELRY_API);
    console.log(result);
    dispatch({
      type: CASE_GET_JEWELRY,
      payload: result,
    });
  }

  return (
    <jewelryContext.Provider
      value={{
        jewelry: state.jewelry,
        getJewelry,
      }}
    >
      {children}
    </jewelryContext.Provider>
  );
};

export default JewelryContextProvider;
