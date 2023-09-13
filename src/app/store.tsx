import { Store, configureStore } from "@reduxjs/toolkit";

import submittedValueReducer from "./slices/submittedValueSlice";
import apiResponseReducer from "./slices/apiResponsesSlice";
import currentSelectionReducer from "./slices/currentSelectionSlice";
import testSubmissionsReducer from "./slices/testSubmissionsSlice";



export const store: Store = configureStore({

  reducer: {

    submittedValue: submittedValueReducer,
    apiResponses: apiResponseReducer,
    currentSelection: currentSelectionReducer,
    testSubmissions: testSubmissionsReducer

  },

});

export interface AppState {

  submittedValue: string,
  testSubmissions: string[],
  apiResponses: {}[],
  currentSelection: number,

};