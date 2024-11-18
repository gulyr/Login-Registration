import { configureStore } from '@reduxjs/toolkit'
import containerReducer from './slices/slice'

const store = configureStore({
    reducer: {
        container: containerReducer,
    },
})

export default store