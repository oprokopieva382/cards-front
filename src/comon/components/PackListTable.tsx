import * as React from "react"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell, { tableCellClasses } from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import { useState } from "react"
import { styled } from "@mui/material"
import { PaginationComponent } from "./PaginationComponent"
import { ActionButtons } from "./ActionButtons"

interface Column {
  id: "name" | "cards" | "updated" | "created" | "actions"
  label: string
  minWidth?: number
  align?: "right"
  format?: (value: number) => string
}

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

const columns: readonly Column[] = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "cards", label: "Cards", minWidth: 100 },
  { id: "updated", label: "Last Updated", minWidth: 100 },
  { id: "created", label: "Created by", minWidth: 100 },
  { id: "actions", label: "Actions", minWidth: 100 },
]

interface Data {
  name: string
  cards: number
  updated: string
  created: string
  actions: any
}

function createData(
  name: string,
  cards: number,
  updated: string,
  created: string,
  actions: any,
): Data {
  return { name, cards, updated, created, actions }
}

const rows = [
  createData("Pack Name", 4, "18.03.2021", "Ivan Ivanov", <ActionButtons />),
  createData("Pack Name", 37, "18.03.2021", "Ivan Ivanov", <ActionButtons />),
  createData("Pack Name", 18, "18.03.2021", "Ivan Ivanov", <ActionButtons />),
  createData("Pack Name", 0, "18.03.2021", "Ivan Ivanov", "img"),
  createData("Pack Name", 0, "18.03.2021", "Ivan Ivanov", "img"),
  createData("Pack Name", 0, "18.03.2021", "Ivan Ivanov", "img"),
  createData("Pack Name", 0, "18.03.2021", "Ivan Ivanov", "img"),
  createData("Pack Name", 0, "18.03.2021", "Ivan Ivanov", "img"),
  createData("Pack Name", 0, "18.03.2021", "Ivan Ivanov", "img"),
  createData("Pack Name", 0, "18.03.2021", "Ivan Ivanov", "img"),
  createData("Pack Name", 0, "18.03.2021", "Ivan Ivanov", "img"),
  createData("Pack Name", 0, "18.03.2021", "Ivan Ivanov", "img"),
  createData("Pack Name", 0, "18.03.2021", "Ivan Ivanov", "img"),
  createData("Pack Name", 0, "18.03.2021", "Ivan Ivanov", "img"),
  createData("Pack Name", 0, "18.03.2021", "Ivan Ivanov", "img"),
]

export const PackListTable = () => {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <>
      <Paper sx={{ width: "100%", overflow: "hidden", margin: "0 auto" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <StyledTableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.cards}
                    >
                      {columns.map((column) => {
                        const value = row[column.id]
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        )
                      })}
                    </TableRow>
                  )
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <PaginationComponent count={10} />
    </>
  )
}
