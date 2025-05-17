import { configureStore } from '@reduxjs/toolkit'
import packageReducer from '../features/packages/packageSlice'
import searchReducer from '../features/search/searchSlice'
import categoriesReducer from '../features/categories/categoriesSlice'

export const store = configureStore({
    reducer: {
        packages: packageReducer,
        categories: categoriesReducer,
        search: searchReducer
    },
})