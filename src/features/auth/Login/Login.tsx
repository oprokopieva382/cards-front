import { EmailReuse } from "../../../comon/components/EmailReuse"
import { Password } from "../../../comon/components/Password"
import "./login.css"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import { Header } from "../../../comon/components/Header"
import Checkbox from "@mui/material/Checkbox"
import FormControlLabel from "@mui/material/FormControlLabel"
import { SuperButton } from "../../../comon/components/SuperButton"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"

type FormData = {}

export const Login = () => {
  // const loginHandler = () => {
  //   dispatch(authThunk.login(arg))
  // }
  const paperStyle = {
    padding: 20,
    width: 413,
    margin: "20px auto",
    height: 552
  }
  return (
    <Grid>
      <Header />
      <Grid marginTop={"120px"}>
        <Paper elevation={10} style={paperStyle}>
          <Grid textAlign="center">
            <h2>Sign In</h2>
            <EmailReuse />
            <Password />
          </Grid>
          <FormControlLabel
            style={{ marginTop: 20, marginLeft: 20 }}
            control={
              <Checkbox
                checked={true}
                onChange={() => {}}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label="Remember me"
          />
          <Grid textAlign="center" marginTop={"69px"}>
            <Typography
              textAlign={"right"}
              style={{ marginRight: 30, marginBottom: 69 }}
            >
              <Link href="#" underline="none" color={"black"}>
                {"Forgot password?"}
              </Link>
            </Typography>
            <SuperButton width={"347px"} text={"Sign In"} borderRadius="30px" />
            <Typography textAlign={"center"} style={{ marginTop: 31 }}>
              Don't have an account?
              <Grid marginTop={"11px"}>
                <Link href="#" underline="none" color={"#366EFF"}>
                  {"Sign Up"}
                </Link>
              </Grid>
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
  /* <h1>Login</h1>
      <button onClick={loginHandler}>Login</button> */
}
