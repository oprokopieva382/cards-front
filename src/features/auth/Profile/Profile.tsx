import { useFormik } from "formik"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { Header } from "../../../comon/components/Header"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Button from "@mui/material/Button"
import profileImage from "../../../assets/img/pic.jpg"
import Avatar from "@mui/material/Avatar"
import TextField from "@mui/material/TextField"
import InputAdornment from "@mui/material/InputAdornment"
import IconButton from "@mui/material/IconButton"
import { BorderColor, Edit, Logout } from "@mui/icons-material"
import Typography from "@mui/material/Typography"
import Badge from "@mui/material/Badge"
import { SuperButton } from "../../../comon/components/SuperButton"
import Box from "@mui/material/Box"
import { EditableProfileTitle } from "../../../comon/components/EditableProfileTitle"
import Link from "@mui/material/Link"
import { colors } from "@mui/material"

export const Profile = () => {
  const dispatch = useAppDispatch()

  const formik = useFormik({
    initialValues: {},
    onSubmit: (arg) => {
      //dispatch(authThunk.login(arg))
      console.log(arg)
    },
  })
  const paperStyle = {
    padding: 20,
    width: 413,
    margin: "20px auto",
    height: 372,
  }
  return (
    <div>
      <Header />
      <Box sx={{ display: "flex", justifyContent: "center", mt: "20px" }}>
        <Paper elevation={10} style={paperStyle}>
          <h2 style={{ marginBottom: "30px", textAlign: "center" }}>
            Personal Information
          </h2>
          <Grid textAlign="center">
            <Badge
              overlap={"circular"}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                <IconButton
                  component={"label"}
                  sx={{
                    width: "30px",
                    height: "30px",
                    border: "1px solid #fff",
                    bgcolor: "#808080",
                  }}
                />
              }
            >
              <Avatar
                alt="user avatar"
                src={profileImage}
                sx={{ width: "96px", height: "96px", mt: "30px" }}
              />
            </Badge>
            <Grid textAlign="center">
              <EditableProfileTitle />
            </Grid>
            <div style={{ color: "#000000", opacity: 0.5, marginTop: 14 }}>
              oprokopieva382@gmail.com
            </div>
            <Button
              style={{
                background: "#FCFCFC",
                borderRadius: "30px",
                boxShadow:
                  "0px 2px 10px rgba(109, 109, 109, 0.25), inset 0px 1px 0px rgba(255, 255, 255, 0.3)",
                borderColor: "lightgray",
                color: "black",
                marginTop: 29,
              }}
              variant="outlined"
              startIcon={<Logout />}
            >
              Log out
            </Button>
          </Grid>
        </Paper>
      </Box>
    </div>
  )
}
