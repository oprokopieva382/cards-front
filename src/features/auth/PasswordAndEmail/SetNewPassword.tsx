import Grid from "@mui/material/Grid"
import { Header } from "../../../comon/components/Header"
import Paper from "@mui/material/Paper"
import TextField from "@mui/material/TextField/TextField"
import Button from "@mui/material/Button"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { useFormik } from "formik"
import { emailMessage } from "../auth.selector"
import { useNavigate, useParams } from "react-router-dom"
import { authThunk } from "../auth.slice"
import { paths } from "../../../comon/routes/paths"

export const SetNewPassword = () => {
  const dispatch = useAppDispatch()
  const email = useAppSelector(emailMessage)
  const navigate = useNavigate()

  const { token } = useParams()
  const tokenForResetPassword = token ? token : ""

  const formik = useFormik({
    initialValues: {
      password: "",
    },
    onSubmit: (arg) => {
      dispatch(
        authThunk.setNewPassword({
          password: arg.password,
          resetPasswordToken: tokenForResetPassword,
        }),
      )
        .unwrap()
        .then(() => navigate(paths.LOGIN))
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
      <Grid marginTop={"120px"}>
        <form onSubmit={formik.handleSubmit}>
          <Paper elevation={10} style={paperStyle}>
            <Grid textAlign="center">
              <h2 style={{ marginBottom: "80px" }}>Create new password</h2>
              <TextField
                variant="standard"
                placeholder="Enter your new password"
                style={{ width: "347px" }}
                type="password"
                label="Password"
                {...formik.getFieldProps("password")}
              />
            </Grid>
            <Grid textAlign="start" marginTop={"69px"} margin={" 18px 33px"}>
              <p>
                {` Create new password and we will send you further instructions
                to ${email}`}
              </p>
              <Button
                style={{ width: "347px", borderRadius: "30px", marginTop: 50 }}
                type={"submit"}
                variant={"contained"}
                color={"primary"}
              >
                Create new password
              </Button>
            </Grid>
          </Paper>
        </form>
      </Grid>
    </div>
  )
}
