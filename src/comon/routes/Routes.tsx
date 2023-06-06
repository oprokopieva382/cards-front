import { createBrowserRouter } from "react-router-dom"
import App from "../../App"
import { paths } from "./paths"
import { Register } from "../../features/auth/Register/Register"
import { Login } from "../../features/auth/Login/Login"
import { ForgotPassword } from "../../features/auth/PasswordAndEmail/ForgotPassword"
import { CheckEmail } from "../../features/auth/PasswordAndEmail/CheckEmail"
import { SetNewPassword } from "../../features/auth/PasswordAndEmail/SetNewPassword"
import { Profile } from "../../features/auth/Profile/Profile"


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
  {
    path: paths.FORGOT_PASSWORD,
    element: <ForgotPassword />,
  },
  {
    path: paths.CHECK_EMAIL,
    element: <CheckEmail />,
  },
  {
    path: paths.SET_NEW_PASSWORD,
    element: <SetNewPassword />,
  },
  {
    path: paths.PROFILE,
    element: <Profile />,
  },
])
