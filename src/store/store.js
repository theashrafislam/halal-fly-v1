import { configureStore } from '@reduxjs/toolkit'
import packageReducer from '../features/packages/packageSlice'
import categoriesReducer from '../features/categories/categoriesSlice'

export const store = configureStore({
    reducer: {
        packages: packageReducer,
        categories: categoriesReducer
    },
})