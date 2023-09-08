import { Store, configureStore } from "@reduxjs/toolkit";

import apiResponseReducer from "./slices/apiResponsesSlice";
import testSubmissionsReducer from "./slices/testSubmissionsSlice";



export const store: Store = configureStore({

  reducer: {

    apiResponses: apiResponseReducer,
    testSubmissions: testSubmissionsReducer

  },

});