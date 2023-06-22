import { Container } from "@mui/material"
import { useEffect } from "react"
import { useAppDispatch } from "../../../comon/hooks"
import { packActions, packThunk } from "../packs.slice"
import { usePackFilter } from "../hooks/usePackFilter"
import { PackListTable, PackNavigator, PackSettings } from "../../../comon/components"

export const Packs = () => {
  const dispatch = useAppDispatch()
  const { searchParams } = usePackFilter()
  const paramsSearch = Object.fromEntries(searchParams)

  useEffect(() => {
    dispatch(packActions.setParams({ params: { ...paramsSearch } }))
    dispatch(packThunk.getPacks())
  }, [])
 
  return (
    <Container maxWidth="lg">
      <PackNavigator title="Packs list" buttonTitle="Add new pack" />
      <PackSettings>
        <PackListTable />
      </PackSettings>
    </Container>
  )
}
