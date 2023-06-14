import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import { Header, SuperButton } from "../../../comon/components"
import envelope from "../../../assets/img/Envelope.svg"
import { Button } from "@mui/material"
import { paths } from "../../../comon/routes/paths"
import { emailMessage } from "../auth.selector"
import { useEffect } from "react"
import { authThunk } from "../auth.slice"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../comon/hooks"

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
      <Grid marginTop={"120px"} textAlign={"center"}>
        <Paper elevation={10} style={paperStyle}>
          <h2 style={{ marginBottom: "29px" }}>CheckEmail</h2>

          <img
            src={envelope}
            alt="Envelope"
            style={{ width: "108px", color: "#96afd9", marginBottom: "31px" }}
          />
          <p>{`We've sent an Email with instructions to ${email}`}</p>
          <SuperButton
            marginTop={41}
            type={"submit"}
            width="347px"
            borderRadius="30px"
            text="Back to login"
            onClick={() => {
              navigate(paths.LOGIN)
            }}
          />
        </Paper>
      </Grid>
    </>
  )
}
