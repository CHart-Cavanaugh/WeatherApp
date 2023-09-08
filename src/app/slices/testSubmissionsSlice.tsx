import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Slice } from "@reduxjs/toolkit";



const testSubmissionsSlice: Slice = createSlice({

  name: "testSubmissions",
  initialState: ([] as string[]),
  reducers: {

    addSubmission: (state, action: PayloadAction<string>) => {

      state.unshift(action.payload);
      return state;

    }

  }

});



export const { addSubmission } = testSubmissionsSlice.actions;

export default testSubmissionsSlice.reducer;