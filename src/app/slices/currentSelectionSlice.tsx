/* Notes:

  - The current selection refers to which list item of the 
    "#weather-request-history" element currently has it's
    "className" attribute set to "selected".
  - The current selection should be the index of the selected
    list item in the "apiResponses" array.
  - [END]

*/



import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Slice } from "@reduxjs/toolkit";



const currentSelectionSlice: Slice = createSlice({

  name: "currentSelection",
  initialState: -1,
  reducers: {

    unselect: state => state = -1,
    selectFirst: state => state = 0,
    selectClicked: (state, action) => state = action.payload

  }

});



export const { unselect, selectFirst, selectClicked } = currentSelectionSlice.actions;

export default currentSelectionSlice.reducer;