import Container from "@mui/material/Container/Container"
import FormControl from "@mui/material/FormControl/FormControl"
import FormHelperText from "@mui/material/FormHelperText/FormHelperText"
import MenuItem from "@mui/material/MenuItem/MenuItem"
import Pagination from "@mui/material/Pagination"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import { useState } from "react"

export type PaginationPropsType = {
  count: number
}

export const PaginationComponent: React.FC<PaginationPropsType> = ({ count }) => {
  const [age, setAge] = useState("5")

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value)
  }
  return (
    <>
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
        }}
      >
        <Pagination
          count={count}
          shape="rounded"
          sx={{ marginTop: 3 }}
          color="primary"
        />
        <FormControl
          sx={{
            m: 1,
            minWidth: 120,
            display: "flex",
            flexDirection: "row",
            marginTop: "28px",
          }}
          size="small"
        >
          <FormHelperText>Show</FormHelperText>
          <Select
            value={age}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={{ height: "30px" }}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </Select>
          <FormHelperText>Cards Per Page</FormHelperText>
        </FormControl>
      </Container>
    </>
  )
}
