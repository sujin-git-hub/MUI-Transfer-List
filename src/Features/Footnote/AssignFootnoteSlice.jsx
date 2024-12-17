import { createSlice } from '@reduxjs/toolkit'



const initialState = [{
    FootNote : "Abcd assigned Foot",
    FootnoteId : 6,
    Type: 1
  },{
    FootNote : "test assi Footnote",
    FootnoteId : 5,
    Type: 1
  }]

  export const AssignFootNoteSlice = createSlice({
    name: 'assignFootNote',
    initialState,
    reducers: {
      addFoot: (state, action) => {
        debugger;
      },
      removeFoot: (state, action) => {
        debugger;
      },
    },
  })

  export const { addFoot, removeFoot } = AssignFootNoteSlice.actions

export default AssignFootNoteSlice.reducer