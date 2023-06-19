import { FC } from "react"
import Typography from "@mui/material/Typography"
import { SuperButton } from "."
import { Box } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../hooks"
import { packThunk } from "../../features/packs/packs.slice"

type PropsType = {
  title: string
  buttonTitle: string
}

export const PackNavigator: FC<PropsType> = ({ title, buttonTitle }) => {
  const dispatch = useAppDispatch()
  const mypack = useAppSelector(state=> state.pack.packs.cardPacks)
   const id = useAppSelector((state) => state.auth.profile?._id)
console.log(mypack)
  const onClickHandler = () => {
    if (buttonTitle === "Add new pack") {
      dispatch(packThunk.addNewPack({ name: "yo", user_id: id }))
      dispatch(packThunk.getPacks({ user_id: id }))
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
