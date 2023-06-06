import BorderColorIcon from "@mui/icons-material/BorderColor"
import { Grid } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import { useState } from "react"

export const EditableProfileTitle = () => {
  const [userName, setUserName] = useState("Oksana")

  return (
    <div style={{ marginTop: 17 }}>
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
        {userName}
        <IconButton onClick={() => {}}>
          <BorderColorIcon sx={{ color: "#000", fontSize: "20px" }} />
        </IconButton>
      </Typography>
    </div>
  )
}
