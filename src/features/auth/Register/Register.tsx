import Grid from "@mui/material/Grid"
import { useAppDispatch } from "../../../app/hooks"
import { Header } from "../../../comon/components/Header"
import { authThunk } from "../auth.slice"
import s from "./Register.module.css"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import { useFormik } from "formik"
import { paths } from "../../../comon/routes/paths"
import { useEffect } from "react"
import { Link } from "react-router-dom"


export const Register = () => {
  const dispatch = useAppDispatch()
 useEffect(() => {
   dispatch(authThunk.me())
 }, [])

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: ""
   
    },
    onSubmit: (arg) => {
      dispatch(authThunk.register(arg))
      console.log(arg)
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
              <h2>Sign Up</h2>
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
              <TextField
                variant="standard"
                placeholder="Confirm your password"
                style={{ width: "347px", marginTop: "30px" }}
                required
                type="confirmPassword"
                label="Confirm Password"
                {...formik.getFieldProps("confirmPassword")}
              />
            </Grid>
            <Grid textAlign="center" marginTop={"75px"}>
               <Button
                style={{ width: "347px", borderRadius: "30px" }}
                type={"submit"}
                variant={"contained"}
                color={"primary"}
              >
                Sign Up
              </Button>
              <Typography textAlign={"center"} style={{ marginTop: 31 }}>
                Already have an account?
                <Grid marginTop={"11px"}>
                  <Link to={paths.LOGIN}  color={"#366EFF"}>
                    {"Sign In"}
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
