import { createSlice } from "@reduxjs/toolkit"
import {
  authAPI,
  ArgRegisterType,
  ArgLoginType,
  ProfileType,
  ForgotPasswordType,
  UpdateProfileType,
  SetNewPasswordType,
} from "./auth.api"
import { createAppAsyncThunk } from "../../comon/utils/create-app-async-thunk"
import { setAppInitializedAction } from "../../comon/utils/setAppInitializedAction"

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
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const res = await authAPI.me()
      return { profile: res.data }
    } catch (e) {
      return rejectWithValue(e)
    } finally {
      dispatch(setAppInitializedAction())
    }
  },
)
const setNewPassword = createAppAsyncThunk<
  { path: PathDirectionType; info: string },
  SetNewPasswordType
>("auth/setNewPassword", async (data) => {
  const res = await authAPI.setNewPassword(data)
  return {
    path: "auth/login",
    info: res.data.info,
  }
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
    info: res.data.info,
  }
})

const updateProfile = createAppAsyncThunk<
  { profile: ProfileType },
  UpdateProfileType
>("auth/updateProfile", async (arg) => {
  const res = await authAPI.updateProfile(arg)
  return { profile: res.data.updatedUser }
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
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.profile = action.payload.profile
      })
      .addCase(setNewPassword.fulfilled, (state, action) => {
        state.path = action.payload.path
      })
  },
})

export const authReducer = slice.reducer
export const authThunk = {
  register,
  login,
  logOut,
  me,
  forgotPassword,
  updateProfile,
  setNewPassword,
}

export type InformType = {
  info: string
  error?: string
}

type PathDirectionType = "auth/login" | "/auth/check-email" | "/"
type InfoMessageType = { info: string }
