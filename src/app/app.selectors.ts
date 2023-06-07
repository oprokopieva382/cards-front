import { RootState } from "./store";

const isAppInitialized = (state: RootState)=> state.app.isAppInitialized

export { isAppInitialized }