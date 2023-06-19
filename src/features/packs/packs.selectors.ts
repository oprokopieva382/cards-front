import { RootState } from "../../app/store";

const packsSelector = (state: RootState)=> state.pack.packs

export { packsSelector }
