import { Store, configureStore } from "@reduxjs/toolkit";
import apiResponseReducer from "./slices/apiResponsesSlice";



export const store: Store = configureStore({

  reducer: {

    apiResponses: apiResponseReducer,

  },

});