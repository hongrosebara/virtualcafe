import { createContext, useReducer } from "react";

export const RoasterContext = createContext();

export const ACTION_TYPES = {
  SET_LAT_LONG: "SET_LAT_LONG",
  SET_ROASTERS: "SET_ROASTERS",
};

const roasterReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_LAT_LONG: {
      return {...state, latLong: action.payload.latLong}
    }
    case ACTION_TYPES.SET_ROASTERS: {
      return {...state, roasters: action.payload.roasters}
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const RoasterProvider = ({ children }) => {
  const initialState = {
    latLong: "",
    roasters: [],
  };

  const [state, dispatch] = useReducer(roasterReducer, initialState);
  
  return (
    <RoasterContext.Provider value={{ state, dispatch }}>
      {children}
    </RoasterContext.Provider>
  );
};

export default RoasterProvider;