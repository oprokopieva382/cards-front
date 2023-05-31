import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { SuperButton } from "./SuperButton"

export const Header=() => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 4 }}>
            IT-INCUBATOR
          </Typography>
          <SuperButton width="113px" text="Sign in" borderRadius="30px" color="primary"/>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
