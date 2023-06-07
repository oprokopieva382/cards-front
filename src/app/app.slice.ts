import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { setAppInitializedAction } from "../comon/utils/setAppInitializedAction";

const initialState = {
  error: null as string | null,
  isLoading: true,
  isAppInitialized: false,
} 


const slice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
      state.isLoading = action.payload.isLoading
    },
     },
  extraReducers: builder => {
    builder.addCase(setAppInitializedAction, state=> {
      state.isAppInitialized = true
    })
  },
})

export const appReducer = slice.reducer
export const appActions = slice.actions