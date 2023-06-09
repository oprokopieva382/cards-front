import { useAppDispatch } from "../../../app/hooks"
import { Header } from "../../../comon/components/Header"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Button from "@mui/material/Button"
import profileImage from "../../../assets/img/pic.jpg"
import Avatar from "@mui/material/Avatar"
import IconButton from "@mui/material/IconButton"
import { Logout } from "@mui/icons-material"
import Badge from "@mui/material/Badge"
import Box from "@mui/material/Box"
import { EditableProfileTitle } from "../../../comon/components/EditableProfileTitle"
import { authThunk } from "../auth.slice"
import { useNavigate } from "react-router-dom"
import { paths } from "../../../comon/routes/paths"
import { useEffect } from "react"
import LocalSeeOutlinedIcon from "@mui/icons-material/LocalSeeOutlined"

export const Profile = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    console.log("profile")
    dispatch(authThunk.me())
  }, [])
  //   const formik = useFormik({
  //     initialValues: {},
  //     onSubmit: (arg) => {
  //       //dispatch(authThunk.login(arg))
  //       console.log(arg)
  //     },
  //   })

  const logOutHandler = () => {
    dispatch(authThunk.logOut())
    navigate(paths.LOGIN)
  }
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
                  disableRipple={true}
                  sx={{
                    width: "30px",
                    height: "30px",
                    border: "1px solid #fff",
                    bgcolor: "#808080",
                  }}>
                  <LocalSeeOutlinedIcon
                    sx={{ fontSize: "16px", color: "#FFF" }}
                  />
                  <input type={"file"} hidden accept="image/*" />
                </IconButton>
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
              onClick={logOutHandler}
            >
              Log out
            </Button>
          </Grid>
        </Paper>
      </Box>
    </div>
  )
}
