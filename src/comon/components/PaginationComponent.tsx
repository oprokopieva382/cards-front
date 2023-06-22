import Container from "@mui/material/Container/Container"
import FormControl from "@mui/material/FormControl/FormControl"
import FormHelperText from "@mui/material/FormHelperText/FormHelperText"
import MenuItem from "@mui/material/MenuItem/MenuItem"
import Pagination from "@mui/material/Pagination"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import { useAppSelector } from "../hooks"
import {
  pageCountSelector,
  pageSelector,
  totalCountSelector,
} from "../../features/packs"

export type PaginationPropsType = {
  onChangePaginationHandler: (page: string, pageCount: string) => void
}

export const PaginationComponent: React.FC<PaginationPropsType> = ({
   onChangePaginationHandler,
}) => {
  const page = useAppSelector(pageSelector)
  const totalCount = useAppSelector(totalCountSelector)
  const pageCount = useAppSelector(pageCountSelector)
  const lastPage = Math.ceil(totalCount / pageCount)

  const handleChange = (event: SelectChangeEvent) => {
    onChangePaginationHandler(page.toString(), event.target.value)
  }
  const onPaginationChange = (e:React.ChangeEvent<unknown>, page: number)=> {
onChangePaginationHandler(page.toString(), pageCount.toString())
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
          count={lastPage}
          page={page || 1}
          shape="rounded"
          sx={{ marginTop: 3 }}
          color="primary"
          onChange={onPaginationChange}
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
            value={String(pageCount)}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={{ height: "30px" }}
          >
            <MenuItem value={"4"}>4</MenuItem>
            <MenuItem value={"7"}>7</MenuItem>
            <MenuItem value={"10"}>10</MenuItem>
          </Select>
          <FormHelperText>Cards Per Page</FormHelperText>
        </FormControl>
      </Container>
    </>
  )
}
