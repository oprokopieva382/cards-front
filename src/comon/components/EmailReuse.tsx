import TextField from "@mui/material/TextField"


// export type EmailPropsType = {
//   label: string
//   register: UseFormRegister<any>
//   name: "email" | "loginEmail"
// }
export const EmailReuse = () => {
  return (
    <TextField
      id="standard-basic"
      variant="standard"
      placeholder="Enter your email"
      style={{ width: "347px" }}
      required
    />
  )
}
