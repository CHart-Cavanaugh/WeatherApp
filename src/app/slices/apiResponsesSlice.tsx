import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Slice } from "@reduxjs/toolkit";



const responseSlice: Slice = createSlice({

  name: "apiResponses",
  initialState: ([] as {}[]),
  reducers: {

    addResponse: (state, action: PayloadAction<{}>) => {

      state.push(action.payload);
      return state;

    }

  }

});



export const { addResponse } = responseSlice.actions;

export default responseSlice.reducer;