import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Slice } from "@reduxjs/toolkit";



const responseAquisitionTimestampsSlice: Slice = createSlice({

  name: "responseAquisitionTimestamps",
  initialState: ([] as string[]),
  reducers: {

    addTimestamp: (state, action) => {

      state.unshift(action.payload);
      return state;

    }

  }

});



export const { addTimestamp } = responseAquisitionTimestampsSlice.actions;

export default responseAquisitionTimestampsSlice.reducer;