import { PackNavigator } from "../../../comon/components/PackNavigator"
import { PackSettings } from "../../../comon/components/PackSettings"
import { PackListTable } from "../../../comon/components/PackListTable"
import { Container } from "@mui/material"

export const Packs = () => {
  return (
    <Container maxWidth="lg">
      <PackNavigator title="Packs list" buttonTitle="Add new pack" />
      <PackSettings />
      <PackListTable />
    </Container>
  )
}
