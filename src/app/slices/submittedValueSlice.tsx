import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Slice } from "@reduxjs/toolkit";



const submittedValueSlice: Slice = createSlice({

  name: "submittedValue",
  initialState: "",
  reducers: {

    submitValue: (state, action) => state = action.payload

  }

})



export const { submitValue } = submittedValueSlice.actions;

export default submittedValueSlice.reducer;