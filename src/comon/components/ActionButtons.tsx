import IconButton from "@mui/material/IconButton/IconButton"
import SchoolIcon from "@mui/icons-material/School"
import { FC, memo} from "react"
import { EditPack } from "./EditPack"
import { DeletePack } from "./DeletePack"

type PropsType = {
  _id: string
  myCards: boolean
  packName: string
}

export const ActionButtons: FC<PropsType> = memo(({ _id, myCards, packName }) => {
  return (
    <>
      <IconButton aria-label="learn">
        <SchoolIcon />
      </IconButton>
      {myCards && (
        <IconButton aria-label="edit">
          <EditPack _id={_id} packName={packName} />
        </IconButton>
      )}
      {myCards && (
        <IconButton aria-label="delete">
          <DeletePack _id={_id} />
        </IconButton>
      )}
    </>
  )
})
