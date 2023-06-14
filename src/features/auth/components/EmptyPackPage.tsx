import Container from "@mui/material/Container"
import { SuperButton } from "../../../comon/components/SuperButton"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import Button from "@mui/material/Button"
import { useNavigate } from "react-router-dom"
import { paths } from "../../../comon/routes/paths"

export const EmptyPackPage = () => {
  const navigate = useNavigate()
  return (
    <Container maxWidth="lg">
      <Box width={"100%"} margin={"0 auto"} paddingTop={"24px"}>
        <Button
          onClick={() => navigate(paths.PACKS)}
          color="inherit"
          startIcon={<ArrowBackIcon />}
        >
          Back to Packs List
        </Button>
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
