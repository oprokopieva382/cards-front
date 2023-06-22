import { ChangeEvent, FC } from "react"
import TextField from "@mui/material/TextField"
import SearchIcon from "@mui/icons-material/Search"
import InputAdornment from "@mui/material/InputAdornment"
import Box from "@mui/material/Box"

type PropsType = {
  fullWidth?: boolean
  value: string
  onChange: (value: string) => void
}

export const SearchInput: FC<PropsType> = ({ fullWidth, value, onChange }) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value)
  }

  return (
    <Box marginTop={"20px"}>
      <TextField
        value={value}
        onChange={onChangeHandler}
        label="Search"
        fullWidth={fullWidth || false}
        id="fullWidth"
        hiddenLabel
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  )
}
