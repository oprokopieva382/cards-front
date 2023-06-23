import { ChangeEvent, FC, memo } from "react"
import TextField from "@mui/material/TextField"
import SearchIcon from "@mui/icons-material/Search"
import InputAdornment from "@mui/material/InputAdornment"
import Box from "@mui/material/Box"

type PropsType = {
  fullWidth?: boolean
  value: string
  onChange: (value: string) => void
  disabled: boolean
}

export const SearchInput: FC<PropsType> = memo(({
  fullWidth,
  value,
  onChange,
  disabled,
}) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value)
  }

  return (
    <Box marginTop={"20px"}>
      <TextField
        disabled={disabled}
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
})
