import { createHashRouter } from "react-router-dom"
import { paths } from "./paths"
import { App } from "../../App"
import {
  CheckEmail,
  ForgotPassword,
  Login,
  Profile,
  Register,
  SetNewPassword,
} from "../../features/auth/components"

export const router = createHashRouter([
  {
    path: paths.MAIN,
    element: <App />,
    children: [
      {
        path: paths.LOGIN,
        element: <Login />,
      },
      {
        path: paths.PROFILE,
        element: <Profile />,
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
    ],
  },
])
