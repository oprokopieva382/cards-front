import Button from "@mui/material/Button"
import { useNavigate } from "react-router-dom"
import { paths } from "../routes/paths"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"

export const BackToPackListButton = () => {
      const navigate = useNavigate()
    return (
      <>
        <Button
          onClick={() => navigate(paths.PACKS)}
          color="inherit"
          startIcon={<ArrowBackIcon />}
        >
          Back to Packs List
        </Button>
      </>
    )
}
