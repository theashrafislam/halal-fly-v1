import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// All packages
// export const fetchPackages = createAsyncThunk(
//   'packages/fetchPackages',
//   async () => {
//     const res = await fetch('https://halal-fly-backend.vercel.app/api/v1/packages')
//     const data = await res.json()
//     return data?.data || []
//   }
// )

export const fetchPackages = createAsyncThunk(
  'packages/fetchPackages',
  async ({ page = 1, limit = 9, search = '' } = {}) => {
    let url = '';

    if (search) {
      url = `https://halal-fly-backend.vercel.app/api/v1/search?query=${encodeURIComponent(search)}&page=${page}&limit=${limit}`;
    } else {
      url = `https://halal-fly-backend.vercel.app/api/v1/packages?page=${page}&limit=${limit}`;
    }

    const res = await fetch(url);
    const data = await res.json();
    return data;
  }
);

// Single package
export const fetchPackageById = createAsyncThunk(
  'packages/fetchPackageById',
  async (id) => {
    const res = await fetch(`https://halal-fly-backend.vercel.app/api/v1/packages/${id}`)
    const data = await res.json()
    return data;
  }
)

const packageSlice = createSlice({
  name: 'packages',
  initialState: {
    items: [],
    package: null,
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
      .addCase(fetchPackageById.pending, (state) => {
        state.loading = true
        state.error = null
        state.package = null
      })
      .addCase(fetchPackageById.fulfilled, (state, action) => {
        state.loading = false
        state.package = action.payload
      })
      .addCase(fetchPackageById.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export default packageSlice.reducer;