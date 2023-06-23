import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell, { tableCellClasses } from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import { IconButton, styled } from "@mui/material"
import { ActionButtons } from "./ActionButtons"
import { useAppSelector, useAppState } from "../hooks"
import { packsSelector } from "../../features/packs/packs.selectors"
import { usePackFilter } from "../../features/packs/hooks/usePackFilter"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import { AppPreloader } from "."

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.common.black,
    fontWeight: 700,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const columns = ["Name", "Cards", "Last Updated", "Created by", "Actions"]

export const PackListTable = () => {
  const cardPacks = useAppSelector(packsSelector)
  const { isLoading } = useAppState()
  const { userId, setSort, setSortHandler, sort } = usePackFilter()

  const onClickSort = () => {
    setSortHandler()
    setSort(!sort)
  }

  return (
    <>
      <Paper sx={{ width: "100%", overflow: "hidden", margin: "0 auto" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            {isLoading ? (
              <AppPreloader />
            ) : (
              <>
                <TableHead>
                  <TableRow>
                    {columns.map((column, index) => (
                      <StyledTableCell key={column[index]}>
                        {column}
                        {column === "Last Updated" && (
                          <IconButton
                            disabled={isLoading}
                            onClick={onClickSort}
                          >
                            <ArrowDropDownIcon />
                          </IconButton>
                        )}
                      </StyledTableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cardPacks?.map((pack) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={pack._id}
                      >
                        <TableCell>{pack.name}</TableCell>
                        <TableCell>{pack.cardsCount}</TableCell>
                        <TableCell>{pack.updated}</TableCell>
                        <TableCell>{pack.created}</TableCell>
                        <TableCell>
                          <ActionButtons
                            _id={pack._id}
                            packName={pack.name}
                            myCards={userId === pack.user_id}
                          />
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </>
            )}
          </Table>
        </TableContainer>
      </Paper>
    </>
  )
}
