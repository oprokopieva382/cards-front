import Container from "@mui/material/Container"
import { PackNavigator } from "./PackNavigator"
import { SearchInput } from "./SearchInput"
import { BackToPackListButton } from "./BackToPackListButton"
import Box from "@mui/material/Box"
import { PackTable } from "./PackTable"

export const FriendsPack = () => {
  return (
    <Container maxWidth="lg">
      <Box width={"100%"} margin={"0 auto"} paddingTop={"24px"}>
        <BackToPackListButton />
        <PackNavigator title="Friend's Pack" buttonTitle="Learn to pack" />
        <Box sx={{ paddingTop: "54px", marginBottom: "24px" }}>
          <SearchInput fullWidth />
        </Box>
        <PackTable />
      </Box>
    </Container>
  )
}
