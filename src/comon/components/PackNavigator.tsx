import { FC } from "react"
import Typography from "@mui/material/Typography"
import { SuperButton } from "."
import { Box } from "@mui/material"

type PropsType = {
  title: string
  buttonTitle: string
}

export const PackNavigator: FC<PropsType> = ({ title, buttonTitle }) => {

  const onClickHandler = () => {
    }

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      width={"100%"}
      margin={"0 auto"}
      paddingTop={"44px"}
    >
      <Typography sx={{ fontSize: "22px", fontWeight: "600" }}>
        {title}
      </Typography>
      <SuperButton
        text={buttonTitle}
        borderRadius="30px"
        width="175px"
        onClick={onClickHandler}
      />
    </Box>
  )
}
