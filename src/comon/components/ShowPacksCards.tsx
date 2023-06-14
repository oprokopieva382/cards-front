import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"
import Typography from "@mui/material/Typography"
import { FC } from "react"
type PropsType = {
  onClick: () => void
  disabled?: boolean
  onMe: boolean
}

export const ShowPacksCards: FC<PropsType> = ({ onClick, disabled, onMe }) => {
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
        <Button onClick={() => {}} disabled={disabled || !onMe}>
          My
        </Button>
        <Button onClick={() => {}} disabled={disabled || onMe}>
          All
        </Button>
      </ButtonGroup>
    </Box>
  )
}

