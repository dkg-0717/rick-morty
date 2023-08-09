import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  canRenderModal: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    renderModal: (state) => {
      state.canRenderModal = !state.canRenderModal
    }
  },
})

export const { renderModal } = modalSlice.actions
