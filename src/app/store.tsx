import { Store, configureStore } from "@reduxjs/toolkit";

import apiResponseReducer from "./slices/apiResponsesSlice";
import currentSelectionReducer from "./slices/currentSelectionSlice";
import testSubmissionsReducer from "./slices/testSubmissionsSlice";



export const store: Store = configureStore({

  reducer: {

    apiResponses: apiResponseReducer,
    currentSelection: currentSelectionReducer,
    testSubmissions: testSubmissionsReducer

  },

});