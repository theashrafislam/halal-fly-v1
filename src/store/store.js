import { configureStore } from '@reduxjs/toolkit'
import packageReducer from '../features/packages/packageSlice'

export const store = configureStore({
    reducer: {
        packages: packageReducer,
    },
})