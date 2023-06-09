import "./login.css"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import { Header } from "../../../comon/components/Header"
import Checkbox from "@mui/material/Checkbox"
import FormControlLabel from "@mui/material/FormControlLabel"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"
import { useFormik } from "formik"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { authThunk } from "../auth.slice"
import { useAppDispatch } from "../../../app/hooks"
import { paths } from "../../../comon/routes/paths"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export const Login = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(authThunk.me())
  }, [])

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    onSubmit: (arg) => {
      dispatch(authThunk.login(arg))
        .unwrap()
        .then(() => navigate(paths.PROFILE))
    },
  })

  const paperStyle = {
    padding: 20,
    width: 413,
    margin: "20px auto",
    height: 552,
  }
  return (
    <Grid>
      <Header />
      <Grid marginTop={"120px"}>
        <form onSubmit={formik.handleSubmit}>
          <Paper elevation={10} style={paperStyle}>
            <Grid textAlign="center">
              <h2>Sign In</h2>
              <TextField
                variant="standard"
                placeholder="Enter your email"
                style={{ width: "347px" }}
                required
                label="Email"
                {...formik.getFieldProps("email")}
              />
              <TextField
                variant="standard"
                placeholder="Enter your password"
                style={{ width: "347px", marginTop: "30px" }}
                required
                type="password"
                label="Password"
                {...formik.getFieldProps("password")}
              />
            </Grid>
            <FormControlLabel
              style={{ marginTop: 24, marginLeft: 20 }}
              control={
                <Checkbox
                  checked={formik.values.rememberMe}
                  onChange={formik.handleChange}
                  name="rememberMe"
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label={"Remember me"}
            />
            <Grid textAlign="center" marginTop={"69px"}>
              <Typography
                textAlign={"right"}
                style={{ marginRight: 30, marginBottom: 64 }}
              >
                <Link
                  href={paths.FORGOT_PASSWORD}
                  underline="none"
                  color={"black"}
                >
                  {"Forgot password?"}
                </Link>
              </Typography>
              <Button
                style={{ width: "347px", borderRadius: "30px" }}
                type={"submit"}
                variant={"contained"}
                color={"primary"}
              >
                Sign in
              </Button>
              <Typography textAlign={"center"} style={{ marginTop: 31 }}>
                Don't have an account?
                <Grid marginTop={"11px"}>
                  <Link href={paths.REGISTER} color={"#366EFF"}>
                    {"Sign Up"}
                  </Link>
                </Grid>
              </Typography>
            </Grid>
          </Paper>
        </form>
      </Grid>
    </Grid>
  )
}
