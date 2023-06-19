import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"
import Typography from "@mui/material/Typography"
import { FC, useState } from "react"
import { useAppSelector } from "../hooks/useAppSelector"
import { useAppDispatch } from "../hooks/useAppDispatch"
import { packThunk } from "../../features/packs/packs.slice"


type PropsType = {
  onClick: () => void
}

export const ShowPacksCards: FC<PropsType> = ({ onClick }) => {
  const [disabled, setDisabled] = useState(false)
  const iD = useAppSelector((state) => state.auth.profile?._id)
  const dispatch = useAppDispatch()

  const onClickHandlerMy = () => {
    dispatch(packThunk.getPacks({ user_id: iD }))
    onClick()
  }
  const onClickHandlerAll = () => {
    dispatch(packThunk.getPacks({}))
    onClick()
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography sx={{ fontWeight: "500", fontSize: "16px", mb: "8px" }}>
        Show packs cards
      </Typography>
      <ButtonGroup variant="outlined">
        <Button onClick={onClickHandlerMy}>My</Button>
        <Button onClick={onClickHandlerAll}>All</Button>
      </ButtonGroup>
    </Box>
  )
}
