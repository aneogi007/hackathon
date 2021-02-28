  
import React, { createContext, useContext, useReducer } from "react";

export const DataLayerContext = createContext();

//children = app, wrapped inside data layer
export const DataLayer = ({ reducer, initialState, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);