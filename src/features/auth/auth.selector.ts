import { RootState } from "../../app/store"


export const profileSelector = (state:RootState) => state.auth.profile
export const emailMessage = (state:RootState)=> state.auth.emailMessage