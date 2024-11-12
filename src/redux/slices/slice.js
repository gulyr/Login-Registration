import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoginActive: true,
  },
  reducers: {
    showRegister: (state) => {
      state.isLoginActive = false
    },
    showLogin: (state) => {
      state.isLoginActive = true
    },
  },
})

export const { showRegister, showLogin } = authSlice.actions
export default authSlice.reducer
