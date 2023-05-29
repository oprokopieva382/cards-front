import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null as string | null,
  isLoading: true,
  isAppInitialized: false,
} 


const slice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<{isLoading: boolean}>)=> {
        state.isLoading = action.payload.isLoading
    }
  },
})

export const appReducer = slice.reducer
export const appActions = slice.actions