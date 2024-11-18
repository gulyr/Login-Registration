import { createSlice } from '@reduxjs/toolkit'

const containerSlice = createSlice({
    name: 'container',
    initialState: {
        isActive: false,
    },
    reducers: {
        activate: (state) => {
            state.isActive = true
        },
        deactivate: (state) => {
            state.isActive = false
        },
    },
})

export const { activate, deactivate } = containerSlice.actions
export default containerSlice.reducer