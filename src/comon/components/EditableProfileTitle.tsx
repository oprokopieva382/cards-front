import BorderColorIcon from "@mui/icons-material/BorderColor"
import TextField from "@mui/material/TextField"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import { ChangeEvent, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { authThunk } from "../../features/auth/auth.slice"

export const EditableProfileTitle = () => {
const dispatch = useAppDispatch()
const name = useAppSelector((state) => state.auth.profile?.name)

  const [userName, setUserName] = useState(name)
  const [editMode, setEditMode] = useState(false)

  const EditableProfileTitleHandler = () => {
    setEditMode(true)
  }

  const InputValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.currentTarget.value)
  }
  const onBlurHandler = () => {
    dispatch(authThunk.updateProfile({ name: userName }))
    setEditMode(false)
  }

  return (
    <div style={{ marginTop: 17 }}>
      {!editMode ? (
        <Typography
          style={{
            width: 43,
            height: 24,
            font: "Montserrat",
            fontSize: "20px",
            fontWeight: "500px",
            lineHeight: "24px",
            display: "flex",
            margin: "0 auto",
          }}
        >
          {name}
          <IconButton onClick={EditableProfileTitleHandler}>
            <BorderColorIcon sx={{ color: "#000", fontSize: "20px" }} />
          </IconButton>
        </Typography>
      ) : (
        <TextField
          value={userName}
          onChange={InputValueHandler}
          onBlur={onBlurHandler}
        />
      )}
    </div>
  )
}
