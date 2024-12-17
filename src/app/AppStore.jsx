import { configureStore } from '@reduxjs/toolkit'
import footNoteSlice from '../Features/Footnote/FootnoteSlice'
import  assignFootNoteSlice  from '../Features/Footnote/AssignFootnoteSlice'

export const store = configureStore({
  reducer: {
    footNote: footNoteSlice,
    assignFootNote: assignFootNoteSlice,
  },
})