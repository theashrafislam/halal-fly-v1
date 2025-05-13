import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// Thunk for fetching packages
export const fetchPackages = createAsyncThunk(
    'packages/fetchPackages',
    async () => {
        const res = await fetch('https://halal-fly-backend.vercel.app/api/v1/packages')
        const data = await res.json()
        return data?.data || []
    }
)

const packageSlice = createSlice({
    name: 'packages',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPackages.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchPackages.fulfilled, (state, action) => {
                state.loading = false
                state.items = action.payload
            })
            .addCase(fetchPackages.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    },
})

export default packageSlice.reducer