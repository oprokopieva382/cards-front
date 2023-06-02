import { Visibility, VisibilityOff } from "@mui/icons-material"
import FormControl from "@mui/material/FormControl"
import IconButton from "@mui/material/IconButton"
import Input from "@mui/material/Input"
import InputAdornment from "@mui/material/InputAdornment"
import InputLabel from "@mui/material/InputLabel"
import TextField from "@mui/material/TextField"
import { FC, useState } from "react"
import { UseFormRegister } from "react-hook-form"
export type PasswordPropsType = {
  label: string
  register: UseFormRegister<any>
  name: "password" | "loginPassword"
}
export const Password: FC<PasswordPropsType> = ({ label, register, name }) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault()
  }
  return (
    <FormControl
      sx={{ marginTop: 2, width: "347px" }}
      variant="standard"
      required
    >
      <InputLabel htmlFor="standard-adornment-password">password</InputLabel>
      <Input
        {...register(name)}
        //label={label}
        id="standard-adornment-password"
        type={showPassword ? "text" : "password"}
        required
        placeholder="Enter your password"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  )
}
