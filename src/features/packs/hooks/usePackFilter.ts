import { useCallback, useEffect, useState } from "react"
import { ArgParamsType } from "../packs.api"
import { useAppDispatch, useAppSelector } from "../../../comon/hooks"
import { packActions, packThunk } from "../packs.slice"
import { paramsSelector } from "../packs.selectors"
import { userIdSelector } from "../../auth/auth.selector"
import { URLSearchParamsInit, useSearchParams } from "react-router-dom"

export const usePackFilter = () => {
  const dispatch = useAppDispatch()
  const params = useAppSelector(paramsSelector)
  const userId = useAppSelector(userIdSelector)
  const [search, setSearch] = useState("")
  const [onMy, setOnMy] = useState(true)
  const [timOutId, setTimeOutId] = useState<number | undefined>(undefined)
  const [searchParams, setSearchParams] = useSearchParams()
  const [sliderValue, setSliderValue] = useState([0, 100])

  useEffect(() => {
    setSearchParams({ ...params } as URLSearchParamsInit)
  }, [setSearchParams, params])
  console.log(params)

  const onDispatchParams = useCallback((params: ArgParamsType) => {
    dispatch(packActions.setParams({ params: { ...params } }))
    dispatch(packThunk.getPacks())
  }, [])

  const onSearchTextDebounce = useCallback(
    (value: string) => {
      clearTimeout(timOutId)
      const newTimeOutId = setTimeout(
        () => onDispatchParams({ packName: value, page: "1" }),
        700,
      )
      setTimeOutId(+newTimeOutId)
    },
    [onDispatchParams, timOutId],
  )

  const onSearchTextChange = useCallback(
    (value: string) => {
      setSearch(value)
      onSearchTextDebounce(value)
    },
    [onSearchTextDebounce],
  )

  const onClickShowPacksCard = useCallback(() => {
    if (onMy) {
      onDispatchParams({ user_id: userId, page: "1" })
    } else {
      onDispatchParams({ user_id: "", page: "1" })
    }
  }, [onDispatchParams, onMy, userId])

  const onChangeSliderHandler = useCallback(
    (min: string, max: string) => {
      onDispatchParams({ min: min, max: max, page: "1" })
    },
    [onDispatchParams],
  )

  const resetFiltering = useCallback(() => {
    onDispatchParams({
      page: "1",
      pageCount: "4",
      min: "0",
      max: "100",
      user_id: "",
      packName: "",
    })
    setOnMy(true)
    setSearch("")
    setSliderValue([0, 100])
  }, [onDispatchParams])

  const onChangePaginationHandler = useCallback(
    (page: string, pageCount: string) => {
      onDispatchParams({ page, pageCount })
    },
    [onDispatchParams],
  )
  
  return {
    onDispatchParams,
    onSearchTextDebounce,
    onSearchTextChange,
    search,
    onClickShowPacksCard,
    onMy,
    setOnMy,
    userId,
    params,
    searchParams,
    sliderValue,
    setSliderValue,
    onChangeSliderHandler,
    resetFiltering,
    onChangePaginationHandler,
  }
}
