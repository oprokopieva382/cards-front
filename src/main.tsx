import React, { useEffect } from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import "./index.css"
import { RouterProvider } from "react-router-dom"
import { router } from "./comon/routes/Routes"
import { createTheme, ThemeProvider } from "@mui/material"

const theme = createTheme({
  palette: {
    primary: {
      main: "#366EFF"
    },
    secondary: {
      main: "#white"
    }
  },
  shape: {borderRadius: 2}
})

// const dispatch = useAppDispatch()
// export const TestComponent = () => {
//   useEffect(() => {
//     debugger
//     dispatch(authThunk.me())
//   }, [dispatch])
//   return <RouterProvider router={router} />
// }


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={router} />)
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)




