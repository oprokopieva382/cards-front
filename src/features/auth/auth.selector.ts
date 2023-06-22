import { RootState } from "../../app/store"


const profileSelector = (state:RootState) => state.auth.profile
const emailMessage = (state:RootState)=> state.auth.emailMessage
const userIdSelector = (state: RootState)=> state.auth.profile?._id

export { profileSelector, emailMessage, userIdSelector }