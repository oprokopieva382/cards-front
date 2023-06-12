import { RootState } from "./store";

const isInitialized = (state: RootState)=> state.app.isAppInitialized
const isAppLoading = (state: RootState) => state.app.isLoading

export { isInitialized, isAppLoading }