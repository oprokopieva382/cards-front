import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { authAPI, payloadType } from "./auth.api"


const register = createAsyncThunk(
  "auth/register",
  (arg: payloadType, thunkAPI) => {
    authAPI.register(arg).then((res) => {
      //return authAPI(res.data)
      debugger
    })
  },
)

const slice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {},
})

export const authReducer = slice.reducer
export const authThunk = { register }
