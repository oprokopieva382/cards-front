import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"
import Typography from "@mui/material/Typography"
import { FC, memo } from "react"

type ShowPackCardsType = {
  onClick: () => void
  onMy: boolean
  setOnMy: (value: boolean) => void
  disabled: boolean
}

export const ShowPacksCards: FC<ShowPackCardsType> = memo(({
  onClick,
  onMy,
  setOnMy,
  disabled
}) => {
  console.log(onMy)
  const onClickHandlerMy = () => {
    setOnMy(!onMy)
    onClick()
  }
  const onClickHandlerAll = () => {
    setOnMy(!onMy)
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
        <Button onClick={onClickHandlerMy} disabled={disabled || !onMy}>
          My
        </Button>
        <Button onClick={onClickHandlerAll} disabled={disabled || onMy}>
          All
        </Button>
      </ButtonGroup>
    </Box>
  )
})
