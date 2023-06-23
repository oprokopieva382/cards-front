import { RootState } from "../../app/store";

const packsSelector = (state: RootState)=> state.pack.cardPacks
const paramsSelector = (state: RootState)=> state.pack.params
const pageSelector = (state: RootState)=> state.pack.page
const pageCountSelector = (state: RootState)=> state.pack.pageCount
const totalCountSelector = (state: RootState)=> state.pack.cardPacksTotalCount
const isLoadingPacksSelector = (state: RootState)=> state.pack.isLoading

export {
  packsSelector,
  paramsSelector,
  pageSelector,
  pageCountSelector,
  totalCountSelector,
  isLoadingPacksSelector,
}
