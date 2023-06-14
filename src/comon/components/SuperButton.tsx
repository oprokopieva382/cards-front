import { Button } from "@mui/material"
import { FC } from "react"

type SuperButtonPropsType = {
  width?: string
  borderRadius?: string
  color?: "primary" | "secondary"
  text: string
  startIcon?: any
  type?: "submit"
  onClick?: () => void
  marginTop?: number
  variant?: string
}

export const SuperButton: FC<SuperButtonPropsType> = ({
  width,
  borderRadius,
  color,
  text,
  startIcon,
  type,
  onClick,
  marginTop,
  variant,
}) => {
  const onClickCallback = () => {
    onClick?.()
  }

  const buttonStyle = {
    width: `${width}`,
    borderRadius: `${borderRadius}`,
    marginTop: `${marginTop}`,
  }

  return (
    <Button
      variant={"contained" || variant}
      color={color}
      sx={buttonStyle}
      onClick={onClickCallback}
      type={type || "button"}
      startIcon={startIcon}
    >
      {text}
    </Button>
  )
}
