import { Store, configureStore } from "@reduxjs/toolkit";

import refreshCountReducer from "./slices/refreshCountSlice";
import submittedValueReducer from "./slices/submittedValueSlice";
import apiResponseReducer from "./slices/apiResponsesSlice";
import responseAquisitionTimestampsReducer from "./slices/responseAquisitionTimestampsSlice";
import currentSelectionReducer from "./slices/currentSelectionSlice";
import testSubmissionsReducer from "./slices/testSubmissionsSlice";



export const store: Store = configureStore({

  reducer: {

    refreshCount: refreshCountReducer,
    submittedValue: submittedValueReducer,
    apiResponses: apiResponseReducer,
    responseAquisitionTimestamps: responseAquisitionTimestampsReducer,
    currentSelection: currentSelectionReducer,
    testSubmissions: testSubmissionsReducer

  },

});

export interface AppState {

  refreshCount: number,
  submittedValue: string,
  testSubmissions: string[],
  apiResponses: {}[],
  responseAquisitionTImestamps: string[],
  currentSelection: number,

};