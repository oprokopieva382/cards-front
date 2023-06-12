import { Button } from "@mui/material"
import { FC } from "react"
import { paths } from "../routes/paths"
import { useNavigate } from "react-router-dom"

type SuperButtonPropsType = {
  width: string
  borderRadius?: string
  color?: "primary" | "secondary"
  text: string
  startIcon?: any
}

export const SuperButton: FC<SuperButtonPropsType> = ({
  width,
  borderRadius,
  color,
  text,
  startIcon,
}) => {

  const navigate = useNavigate()
  const onClickHandler = () => {
    navigate(paths.LOGIN)
  }

  const buttonStyle = {
    width: `${width}`,
    borderRadius: `${borderRadius}`,
  }

  return (
    <Button
      variant="contained"
      color={color}
      sx={buttonStyle}
      onClick={onClickHandler}
    >
      {text}
    </Button>
  )
}
