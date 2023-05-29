import { instance } from "../../comon/api/common.api"

export type payloadType = {
    email: string,
    password: string
}

export const authAPI = {
  register: (arg: payloadType) => {
    return instance.post("auth/registration", arg)
  },
} 