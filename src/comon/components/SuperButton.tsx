import { Button } from "@mui/material"
import { FC } from "react"

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
  const buttonStyle = {
    width: `${width}`,
    borderRadius: `${borderRadius}`,
  }
  return (
    <Button
      variant="contained"
      color={color}
      sx={buttonStyle}
  
    >
      {text}
    </Button>
  )
}
