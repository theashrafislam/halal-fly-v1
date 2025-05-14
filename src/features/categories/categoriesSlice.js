import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// Categories
export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async () => {
        const response = await fetch('https://halal-fly-backend.vercel.app/api/v1/categories');
        const data = await response.json();
        return data?.data || {};
    }
);

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categories: {},
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.loading = true,
                state.error = null
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.loading = false,
                state.categories = action.payload
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            })
    }
});

export default categoriesSlice.reducer;