import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import "./index.css"
import { RouterProvider } from "react-router-dom"
import { router } from "./comon/routes/Routes"
import {ThemeProvider, createTheme} from "@mui/material"
import "react-toastify/dist/ReactToastify.css"
import { GlobalError } from "./comon/GlobalError/GlobalError"

export const theme = createTheme({
  palette: {
    primary: {
      main: "#366EFF",
    },
    secondary: {
      main: "#white",
    },
  },
  shape: { borderRadius: 2 },
})

ReactDOM.createRoot(document.getElementById("root")!).render(
 <ThemeProvider theme={theme}>
    <Provider store={store}>
      {/* <App /> */}
      <RouterProvider router={router} />
      <GlobalError />
    </Provider>
</ThemeProvider>,
)
