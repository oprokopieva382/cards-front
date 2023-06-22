import { FC } from "react"
import Typography from "@mui/material/Typography"
import { SuperButton } from "."
import { Box } from "@mui/material"
import { useAppDispatch } from "../hooks"
import { packThunk } from "../../features/packs/packs.slice"
import { useAppSelector } from "../hooks/useAppSelector"

type PropsType = {
  title: string
  buttonTitle: string
}

export const PackNavigator: FC<PropsType> = ({ title, buttonTitle }) => {
  const dispatch = useAppDispatch()
  const iD = useAppSelector((state) => state.auth.profile?._id)
 
  const onClickHandler = () => {
    if (buttonTitle === "Add new pack") {
      dispatch(packThunk.addNewPack({ name: "yo-yo-yo" }))
      dispatch(packThunk.getPacks())
    }
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




