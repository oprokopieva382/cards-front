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
import { appActions } from "../../app/app.slice"
import { thunkTryCatch } from "../../comon/utils/thunk-try-catch"

const register = createAppAsyncThunk<
  { path: PathDirectionType },
  ArgRegisterType
>("auth/register", async (arg: ArgRegisterType, ThunkAPI) => {
  return thunkTryCatch(ThunkAPI, async () => {
    const res = await authAPI.register(arg)
    return { path: "auth/login" }
  })
})
// const { rejectWithValue, dispatch } = ThunkAPI
// try {
//   await authAPI.register(arg)
//   return { path: "auth/login" }
// } catch (e: any) {
//   const error = e.response ? e.response.data.error : e.message
//   dispatch(appActions.setAppError({ error }))
//   return rejectWithValue(null)
// }

const login = createAppAsyncThunk<{ profile: ProfileType }, ArgLoginType>(
  "auth/login",
  async (arg: ArgLoginType, ThunkAPI) => {
    return thunkTryCatch(ThunkAPI, async () => {
      const res = await authAPI.login(arg)
      return { profile: res.data }
    })
  },
)

//   const { rejectWithValue, dispatch } = ThunkAPI
//   try {
//     const res = await authAPI.login(arg)
//     return { profile: res.data }
//   } catch (e: any) {
//     const error = e.response ? e.response.data.error : e.message
//     dispatch(appActions.setAppError({ error }))
//     return rejectWithValue(null)
//   }
// },
// )

const logOut = createAppAsyncThunk<InformType>(
  "auth/logOut",
  async (_, ThunkAPI) => {
    return thunkTryCatch(ThunkAPI, async () => {
      const res = await authAPI.logOut()
      return { info: res.data.info }
    })
  },
)
//  const { rejectWithValue, dispatch } = ThunkAPI
//  try {
//    const res = await authAPI.logOut()
//    return { info: res.data.info }
//  } catch (e: any) {
//    const error = e.response ? e.response.data.error : e.message
//    dispatch(appActions.setAppError({ error }))
//    return rejectWithValue(null)
//  }

const me = createAppAsyncThunk<{ profile: ProfileType }>(
  "auth/me",
  async (data, ThunkAPI) => {
    return thunkTryCatch(ThunkAPI, async () => {
      const res = await authAPI.me()
      return { profile: res.data }
    })
  },
)
// try {
//   const res = await authAPI.me()
//   return { profile: res.data }
// } catch (e: any) {
//   const error = e.response ? e.response.data.error : e.message
//   dispatch(appActions.setAppError({ error }))
//   return rejectWithValue(null)
// }
// finally {
//   dispatch(setAppInitializedAction())
// }

const setNewPassword = createAppAsyncThunk<
  { path: PathDirectionType; info: string },
  SetNewPasswordType
>("auth/setNewPassword", async (data, ThunkAPI) => {
  return thunkTryCatch(ThunkAPI, async () => {
    const res = await authAPI.setNewPassword(data)
    return {
      path: "auth/login",
      info: res.data.info,
    }
  })
})

// const { rejectWithValue, dispatch } = ThunkAPI
// try {
//   const res = await authAPI.setNewPassword(data)
//   return {
//     path: "auth/login",
//     info: res.data.info,
//   }
// } catch (e: any) {
//   const error = e.response ? e.response.data.error : e.message
//   dispatch(appActions.setAppError({ error }))
//   return rejectWithValue(null)
// }

const forgotPassword = createAppAsyncThunk<
  {
    path: PathDirectionType
    emailMessage: string
  } & InformType,
  ForgotPasswordType
>("auth/forgot", async (arg, ThunkAPI) => {
  return thunkTryCatch(ThunkAPI, async () => {
    const res = await authAPI.forgotPassword(arg)
    return {
      path: "/auth/check-email",
      emailMessage: arg.email,
      info: res.data.info,
    }
  })
})
// const { rejectWithValue, dispatch } = ThunkAPI
//   try {
//     const res = await authAPI.forgotPassword(arg)
//     return {
//       path: "/auth/check-email",
//       emailMessage: arg.email,
//       info: res.data.info,
//     }
//   } catch (e: any) {
//     const error = e.response ? e.response.data.error : e.message
//     dispatch(appActions.setAppError({ error }))
//     return rejectWithValue(null)
//   }

const updateProfile = createAppAsyncThunk<
  { profile: ProfileType },
  UpdateProfileType
>("auth/updateProfile", async (arg, ThunkAPI) => {
  return thunkTryCatch(ThunkAPI, async () => {
    const res = await authAPI.updateProfile(arg)
    return { profile: res.data.updatedUser }
  })
})
//const { rejectWithValue, dispatch } = ThunkAPI
// try {
//   const res = await authAPI.updateProfile(arg)
//   return { profile: res.data.updatedUser }
// } catch (e: any) {
//   const error = e.response ? e.response.data.error : e.message
//   dispatch(appActions.setAppError({ error }))
//   return rejectWithValue(null)
// }

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
