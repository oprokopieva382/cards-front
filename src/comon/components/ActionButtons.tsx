import IconButton from "@mui/material/IconButton/IconButton"
import SchoolIcon from "@mui/icons-material/School"
import ModeEditIcon from "@mui/icons-material/ModeEdit"
import DeleteIcon from "@mui/icons-material/Delete"
import { useAppDispatch } from "../hooks/useAppDispatch"
import { packThunk } from "../../features/packs/packs.slice"
import { FC } from "react"
import { useAppSelector } from "../hooks/useAppSelector"

type PropsType = {
  _id: string
}

export const ActionButtons: FC<PropsType> = ({ _id }) => {
  const dispatch = useAppDispatch()
  const iD = useAppSelector((state) => state.auth.profile?._id)

  const deletePack = () => {
    dispatch(packThunk.deletePack(_id))
    dispatch(packThunk.getPacks({ user_id: iD }))
  }
  const updatePack = () => {
    dispatch(packThunk.updatePack({ _id: _id, name: "Finally updated"}))
    dispatch(packThunk.getPacks({ user_id: iD }))
  }
  return (
    <>
      <IconButton aria-label="learn">
        <SchoolIcon />
      </IconButton>
      <IconButton aria-label="edit" onClick={updatePack}>
        <ModeEditIcon />
      </IconButton>
      <IconButton aria-label="delete" onClick={deletePack}>
        <DeleteIcon />
      </IconButton>
    </>
  )
}
