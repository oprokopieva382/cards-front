import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { SuperButton } from "./SuperButton"
import { useNavigate } from "react-router-dom"
import { paths } from "./../routes/paths"
import { Avatar, Container } from "@mui/material"
import pic from "../../assets/img/pic.jpg"
import { useAuth } from "../hooks/useAuth"

export const Header = () => {
  const navigate = useNavigate()
  const { profile } = useAuth()
  return (
    <AppBar position="static" color="secondary">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 4 }}>
            IT-INCUBATOR
          </Typography>
          {!profile ? (
            <SuperButton
              width="113px"
              text="Sign in"
              borderRadius="30px"
              color="primary"
              onClick={() => navigate(paths.LOGIN)}
            />
          ) : (
            <>
              <span
                style={{
                  paddingRight: 12,
                  cursor: "pointer",
                  color: "black",
                  textDecoration: "underline",
                  transition: "text-decoration 0.3s",
                }}
                onClick={() => {
                  navigate(paths.PROFILE)
                }}
              >
                {profile.name}
              </span>
              <Avatar alt="pic" src={pic} />
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
