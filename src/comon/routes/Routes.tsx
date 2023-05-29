import { createBrowserRouter } from "react-router-dom"
import App from "../../App"

import { paths } from "./paths"
import { Register } from "../../features/auth/Register/Register"
import { Login } from "../../features/auth/Login/Login"

export const router = createBrowserRouter([
  {
    path: paths.MAIN,
    element: <App />,
  },
  {
    path: paths.LOGIN,
    element: <Login />,
  },
  {
    path: paths.REGISTER,
    element: <Register />,
  },
])
