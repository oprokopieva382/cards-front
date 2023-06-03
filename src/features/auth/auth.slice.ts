import { createSlice } from "@reduxjs/toolkit"
import { authAPI, ArgRegisterType, ArgLoginType, ProfileType, ForgotPasswordType } from "./auth.api"
import { createAppAsyncThunk } from "../../comon/utils/create-app-async-thunk"

const register = createAppAsyncThunk<
  { path: PathDirectionType },
  ArgRegisterType
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
const logOut = createAppAsyncThunk<InformType>("auth/logOut", async () => {
  const res = await authAPI.logOut()
  return { info: res.data.info }
})
const me = createAppAsyncThunk<{ profile: ProfileType }>(
  "auth/me",
  async () => {
    const res = await authAPI.me()
    return { profile: res.data }
  })

  const forgotPassword = createAppAsyncThunk<
    {
      path: PathDirectionType
      emailMessage: string
    } & InformType,
    ForgotPasswordType
  >("auth/forgot", async (arg) => {
    const res = await authAPI.forgotPassword(arg)
    return {
      path: "/auth/check-email",
      emailMessage: arg.email,
      info: res.data.info
    }
  })


const slice = createSlice({
  name: "auth",
  initialState: {
    profile: null as ProfileType | null,
    emailMessage: "" as string,
    path: "/" as PathDirectionType,
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
      .addCase(me.fulfilled, (state, action) => {
        state.profile = action.payload.profile
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.emailMessage = action.payload.emailMessage
        state.path = action.payload.path
      })
  },
})

export const authReducer = slice.reducer
export const authThunk = { register, login, logOut, me, forgotPassword }

export type InformType = {
  info: string
  error?: string
}

type PathDirectionType = "auth/login" | "/auth/check-email" | "/"
