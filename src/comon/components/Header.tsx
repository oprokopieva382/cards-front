import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { SuperButton } from "./SuperButton"
import { useNavigate } from "react-router-dom"
import { paths } from './../routes/paths';


export const Header=() => {
  const navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 4 }}>
            IT-INCUBATOR
          </Typography>
          <SuperButton
            width="113px"
            text="Sign in"
            borderRadius="30px"
            color="primary"
            onClick={()=> navigate(paths.LOGIN)}
          />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
