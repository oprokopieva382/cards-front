import { createSlice } from "@reduxjs/toolkit"
import { authAPI, ArgRegisterType, ArgLoginType, ProfileType } from "./auth.api"
import { createAppAsyncThunk } from "../../comon/utils/create-app-async-thunk"

const register = createAppAsyncThunk<void, ArgRegisterType>(
  "auth/register",
  async (arg, thunkAPI) => {
    await authAPI.register(arg)
  },
)

const login = createAppAsyncThunk<{ profile: ProfileType }, ArgLoginType>(
  "auth/login",
  async (arg: ArgLoginType) => {
    const res = await authAPI.login(arg)
    return { profile: res.data }
  },
)

const slice = createSlice({
  name: "auth",
  initialState: {
    profile: null as ProfileType | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.profile = action.payload.profile
    })
  },
})

export const authReducer = slice.reducer
export const authThunk = { register, login }
