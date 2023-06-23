import IconButton from "@mui/material/IconButton"
import { packThunk } from "../../features/packs/packs.slice"
import { useAppDispatch } from "../hooks/useAppDispatch"
import ModeEditIcon from "@mui/icons-material/ModeEdit"
import { FC, memo } from "react"

type PropsType = {
  _id: string
  packName: string
}

export const EditPack: FC<PropsType> = memo(({ _id, packName }) => {
  const dispatch = useAppDispatch()
  const updatePack = () => {
    dispatch(packThunk.updatePack({ _id: _id, name: packName }))
    dispatch(packThunk.getPacks())
  }
  return (
    <IconButton aria-label="edit" onClick={updatePack}>
      <ModeEditIcon />
    </IconButton>
  )
})
