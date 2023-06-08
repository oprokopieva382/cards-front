import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import { Header } from "../../../comon/components/Header"
import envelope from "../../../assets/img/Envelope.svg"
import { Button } from "@mui/material"
import { paths } from "../../../comon/routes/paths"
import { emailMessage } from "../auth.selector"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { useEffect } from "react"
import { authThunk } from "../auth.slice"
import { useNavigate } from "react-router-dom"

export const CheckEmail = () => {
  const dispatch = useAppDispatch()
  const email = useAppSelector(emailMessage)
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(authThunk.me())
  }, [])

  const paperStyle = {
    padding: 20,
    width: 413,
    margin: "20px auto",
    height: 408,
    font: "Montserrat",
    size: 26,
  }
  return (
    <>
      <Header />
      <Grid marginTop={"120px"} textAlign={"center"}>
        <Paper elevation={10} style={paperStyle}>
          <h2 style={{ marginBottom: "29px" }}>CheckEmail</h2>

          <img
            src={envelope}
            alt="Envelope"
            style={{ width: "108px", color: "#96afd9", marginBottom: "31px" }}
          />
          <p>{`We've sent an Email with instructions to ${email}`}</p>
          <Button
            onClick={()=> {navigate(paths.LOGIN)}}
            style={{ width: "347px", borderRadius: "30px", marginTop: 41 }}
            type={"submit"}
            variant={"contained"}
            color={"primary"}
          >
            Back to login
          </Button>
        </Paper>
      </Grid>
    </>
  )
}
