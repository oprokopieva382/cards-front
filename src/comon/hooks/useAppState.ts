import { useAppSelector } from "."
import { isAppLoading } from "../../app/app.selectors"
import { isLoadingPacksSelector } from "../../features/packs/packs.selectors"

export const useAppState = () => {
  const isPacksLoading = useAppSelector(isLoadingPacksSelector)
  const isAPPLoading = useAppSelector(isAppLoading)

  const isLoading = isAPPLoading || isPacksLoading
  return { isLoading }
}
