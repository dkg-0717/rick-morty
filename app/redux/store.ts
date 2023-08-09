import { configureStore } from '@reduxjs/toolkit'
import { modalSlice } from './slices/modal'
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    modalReducer: modalSlice.reducer
  },
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;