import Grid from "@mui/material/Grid"
import { Header } from "../../../comon/components/Header"
import Paper from "@mui/material/Paper"
import TextField from "@mui/material/TextField/TextField"
import Button from "@mui/material/Button"
import { useAppDispatch } from "../../../app/hooks"
import { useFormik } from "formik"

export const SetNewPassword = () => {
   const dispatch = useAppDispatch()
   const formik = useFormik({
     initialValues: {
       password: "",
     },
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
      <Grid marginTop={"120px"}>
        <form onSubmit={formik.handleSubmit}>
          <Paper elevation={10} style={paperStyle}>
            <Grid textAlign="center">
              <h2 style={{ marginBottom: "80px" }}>Create new password</h2>
              <TextField
                variant="standard"
                placeholder="Enter your new password"
                style={{ width: "347px"}}
                type="password"
                label="Password"
                {...formik.getFieldProps("password")}
              />
            </Grid>
            <Grid textAlign="start" marginTop={"69px"} margin={" 18px 33px"}>
              <p>
                Create new password and we will send you further instructions to
                email
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
