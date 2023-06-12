import Grid from "@mui/material/Grid"
import { Header } from "../../../comon/components"
import Paper from "@mui/material/Paper"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { paths } from "../../../comon/routes/paths"
import { useFormik } from "formik"
import { authThunk } from "../auth.slice"
import { emailMessage } from "../constants"
import { ForgotPasswordType } from "../auth.api"
import { Link, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useAppDispatch } from "../../../comon/hooks"

export const ForgotPassword = () => {
  
useEffect(() => {
  dispatch(authThunk.me())
}, [])

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: "",
      message: "",
    },
    onSubmit: (arg) => {
      const payload: ForgotPasswordType = {
        email: arg.email,
        message: emailMessage,
      }
      dispatch(authThunk.forgotPassword(payload))
      navigate(paths.CHECK_EMAIL)
        },
  })
  const paperStyle = {
    padding: 20,
    width: 413,
    margin: "20px auto",
    height: 552,
  }
  return (
    <div>
      <Header />
      <Grid marginTop={"120px"}>
        <form onSubmit={formik.handleSubmit}>
          <Paper elevation={10} style={paperStyle}>
            <Grid textAlign="center">
              <h2 style={{ marginBottom: "80px" }}>Forgot your password?</h2>
              <TextField
                variant="standard"
                placeholder="Enter your email"
                style={{ width: "347px" }}
                label="Email"
                {...formik.getFieldProps("email")}
              />
            </Grid>
            <Grid textAlign="start" marginTop={"69px"} margin={" 26px 33px"}>
              <p>
                Enter your email address and we will send you further
                instructions
              </p>
              <Button
                style={{ width: "347px", borderRadius: "30px", marginTop: 73 }}
                type={"submit"}
                variant={"contained"}
                color={"primary"}
              >
                Send instructions
              </Button>
              <Typography textAlign={"center"} style={{ marginTop: 31 }}>
                Did you remember your password?
                <Grid marginTop={"11px"}>
                  <Link to={paths.LOGIN} color={"#366EFF"}>
                    {"Try logging in"}
                  </Link>
                </Grid>
              </Typography>
            </Grid>
          </Paper>
        </form>
      </Grid>
    </div>
  )
}
