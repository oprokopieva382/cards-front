import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import { SuperButton } from "./SuperButton"
import { BackToPackListButton } from "./BackToPackListButton"


export const EmptyPackPage = () => {

  return (
    <Container maxWidth="lg">
      <Box width={"100%"} margin={"0 auto"} paddingTop={"24px"}>
        <BackToPackListButton/>
        <Typography
          sx={{ fontSize: "22px", fontWeight: "600", paddingTop: "27px" }}
        >
          Name Pack
        </Typography>
      </Box>
      <div
        style={{
          color: "black",
          opacity: 0.5,
          fontWeight: 400,
          fontSize: 16,
          textAlign: "center",
          paddingTop: 84,
        }}
      >
        This pack empty. Click add new card to fill this pack
      </div>
      <div style={{ textAlign: "center", paddingTop: 32 }}>
        <SuperButton text="Add new card" borderRadius="30px" width="175px" />
      </div>
    </Container>
  )
}
