import { createSlice } from "@reduxjs/toolkit";



const refreshCountSlice = createSlice({

  name: "refreshCount",
  initialState: 0,
  reducers: {

    updateRefreshCount: state => ++state

  }

});



export const { updateRefreshCount } = refreshCountSlice.actions;

export default refreshCountSlice.reducer;