import IconButton from "@mui/material/IconButton/IconButton"
import SchoolIcon from "@mui/icons-material/School"
import ModeEditIcon from "@mui/icons-material/ModeEdit"
import DeleteIcon from "@mui/icons-material/Delete"

export type ActionButtonsPropsType = {}

export const ActionButtons: React.FC<ActionButtonsPropsType> = ({}) => {
  return (
    <>
      <IconButton aria-label="learn">
        <SchoolIcon />
      </IconButton>
      <IconButton aria-label="edit">
        <ModeEditIcon />
      </IconButton>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </>
  )
}
