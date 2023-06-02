import { createSlice } from "@reduxjs/toolkit"
import { authAPI, ArgRegisterType, ArgLoginType, ProfileType } from "./auth.api"
import { createAppAsyncThunk } from "../../comon/utils/create-app-async-thunk"

const register = createAppAsyncThunk<{path: PathDirectionType}, ArgRegisterType
>("auth/register", async (arg, thunkAPI) => {
  await authAPI.register(arg)
  return { path: "auth/login" }
})

const login = createAppAsyncThunk<{ profile: ProfileType }, ArgLoginType>(
  "auth/login",
  async (arg: ArgLoginType) => {
    const res = await authAPI.login(arg)
    return { profile: res.data }
  },
)
const logOut = createAppAsyncThunk<InformType>(
  "auth/logOut",
  async () => {
    const res = await authAPI.logOut()
    return { info: res.data.info }
  },
)

const slice = createSlice({
  name: "auth",
  initialState: {
    profile: null as ProfileType | null,
    info: "" as string,
    path: "/" as string
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.profile = action.payload.profile
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.profile = null
      })
      .addCase(register.fulfilled, (state, action) => {
        state.path = action.payload.path
      })
  },
})

export const authReducer = slice.reducer
export const authThunk = { register, login, logOut }

type InformType = {
  info: string
}

type PathDirectionType = "auth/login"