import { createSlice } from '@reduxjs/toolkit'



const initialState = [{
    FootNote : "test123",
    FootnoteId : 1,
    Type: 1
  },{
    FootNote : "Foot test",
    FootnoteId : 2,
    Type: 1
  },{
    FootNote : "Abcd Foot",
    FootnoteId : 3,
    Type: 1
  },{
    FootNote : "test Footnote",
    FootnoteId : 4,
    Type: 1
  }]

  export const FootNoteSlice = createSlice({
    name: 'footNote',
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

  export const { addFoot, removeFoot } = FootNoteSlice.actions

export default FootNoteSlice.reducer