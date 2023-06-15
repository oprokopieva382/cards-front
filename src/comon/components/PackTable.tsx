import { Paper, Table, TableBody, TableContainer, TableHead, TableRow, styled } from "@mui/material"
import TableCell, { tableCellClasses } from "@mui/material/TableCell"
import { PaginationComponent } from "./PaginationComponent"
import { useState } from "react"
import { Rate } from "./Rate"

interface Column {
  id: "question" | "answer" | "lastUpdated" | "grade" 
  label: string
  minWidth?: number
  align?: "center"
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
  { id: "question", label: "Question", minWidth: 170, align: "center" },
  { id: "answer", label: "Answer", minWidth: 100, align: "center" },
  { id: "lastUpdated", label: "Last Updated", minWidth: 100, align: "center" },
  { id: "grade", label: "Grade", minWidth: 100, align: "center" },
]

interface Data {
  question: string
  answer: string
  lastUpdated: string
  grade: any
}

function createData(
  question: string,
  answer: string,
  lastUpdated: string,
  grade: any,
): Data {
  return { question, answer, grade, lastUpdated }
}

const rows = [
  createData("How 'This' works in JavaScript?",  "This is how 'This' works in JavaScript", "18.03.2021", <Rate />),
  createData("How 'This' works in JavaScript?",  "This is how 'This' works in JavaScript", "18.03.2021", <Rate />),
  createData("How 'This' works in JavaScript?",  "This is how 'This' works in JavaScript", "18.03.2021", <Rate />),
  createData("How 'This' works in JavaScript?",  "This is how 'This' works in JavaScript", "18.03.2021", <Rate />),
  createData("How 'This' works in JavaScript?",  "This is how 'This' works in JavaScript", "18.03.2021", <Rate />),


]

export const PackTable = () => {
   const [page, setPage] = useState(0)
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
                      key={row.answer}
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

