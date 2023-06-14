import { PackNavigator } from "../../../comon/components/PackNavigator"
import { PackSettings } from "../../../comon/components/PackSettings"
import { PackTable } from "./PackTable"
import { Container } from "@mui/material"

export const Packs = () => {
  return (
  <Container maxWidth = 'lg'>
      <PackNavigator title="Packs list" buttonTitle="Add new pack" />
      <PackSettings />
      <PackTable />
  
    </Container>
  )
}
