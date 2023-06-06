import axios from "axios"
import { instance } from "../../comon/api/common.api"
import { InformType } from "./auth.slice"


export const authAPI = {
  register: (arg: ArgRegisterType) => {
    return instance.post<RegisterResponseType>("auth/register", arg)
  },
  login: (arg: ArgLoginType) => {
    return instance.post<LoginResponseType>("auth/login", arg)
  },
  logOut: () => {
    return instance.delete<InformType>("auth/me")
  },
  me: () => {
    return instance.post<LoginResponseType>("auth/me")
  },
  forgotPassword: (arg: ForgotPasswordType) => {
    return axios.post<InformType>(
      "https://neko-back.herokuapp.com/2.0/auth/forgot",
      arg,
      {withCredentials: true}
    )
  },
}

export type ProfileType = Omit<LoginResponseType, "token" | "tokenDeathTime">
export type RegisterResponseType = {
  addedUser: ProfileType
}

export type LoginResponseType = {
     created: string
    email: string
    isAdmin: boolean
    name: string
    publicCardPacksCount: number
    rememberMe: boolean
    token: string
    tokenDeathTime: number
    updated: string
    verified: boolean
    __v: number
    _id: string
 }

 export type ForgotPasswordType = {
   email: string
   from?: string
   message?: string
 }
  export type ArgRegisterType = Omit<ArgLoginType, "rememberMe">

 export type ArgLoginType = {
   email: string
   password: string
   rememberMe: boolean
 }