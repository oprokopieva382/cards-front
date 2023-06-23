import IconButton from "@mui/material/IconButton"
import { packThunk } from "../../features/packs/packs.slice"
import { useAppDispatch } from "../hooks/useAppDispatch"
import DeleteIcon from "@mui/icons-material/Delete"
import { FC, memo } from "react"

type PropsType = {
  _id: string
}

export const DeletePack: FC<PropsType> = memo(({ _id }) => {
  const dispatch = useAppDispatch()
  const deletePack = () => {
    dispatch(packThunk.deletePack(_id))
    dispatch(packThunk.getPacks())
  }
  return (
    <IconButton aria-label="delete" onClick={deletePack}>
      <DeleteIcon />
    </IconButton>
  )
})
