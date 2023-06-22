import Box from "@mui/material/Box"
import Slider from "@mui/material/Slider"
import Typography from "@mui/material/Typography"
import { FC } from "react"

type PropsType = {
  disabled?: boolean
  onChange: (minCardsCount: string, maxCardsCount: string) => void
  minMax: number[]
  setMinMax: (value: number[]) => void
}

export const CardsCountSlider: FC<PropsType> = ({
  disabled,
  onChange,
  minMax,
  setMinMax,
}) => {
  const boxSx = {
    width: "63px",
    height: "36px",
    border: "1px solid rgba(000, 000, 000, 0.3)",
    borderRadius: "3px",
    padding: "3px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
  const typographySx = {
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "20px",
    textAlign: "center",
  }

const onMouseUpHandler = ()=> {
onChange(minMax[0].toString(), minMax[1].toString())
}

const onChangeHandler = (event: Event, value: number | number[]) => {
  if (Array.isArray(value)) {
    setMinMax(value)
  }
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
      <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
        Number of cards
      </Typography>
      <Box sx={{ width: 300, display: "flex", alignItems: "center" }}>
        <Box sx={boxSx}>
          <Typography sx={typographySx}>{minMax[0]}</Typography>
        </Box>
        <Slider
          value={minMax}
          onMouseUp={onMouseUpHandler}
          onChange={onChangeHandler}
          sx={{ m: "0 20px" }}
          disabled={disabled}
        />
        <Box sx={boxSx}>
          <Typography sx={typographySx}>{minMax[1]}</Typography>
        </Box>
      </Box>
    </Box>
  )
}

