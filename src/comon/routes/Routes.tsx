import React from "react"
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
import { RequiresAuth } from "../hok/RequiresAuth"
import { Auth } from "../hok/Auth"
import { Cards } from "../../features/auth/components/Cards"
import { Learn } from "../../features/auth/components/Learn"
import { Packs } from "../../features/auth/components/Packs"

export const router = createHashRouter([
  {
    path: paths.MAIN,
    element: <App />,
    children: [
      {
        path: paths.MAIN,
        element: <RequiresAuth />,
        children: [
          {
            path: paths.PROFILE,
            element: <Profile />,
          },
          {
            path: paths.CARDS,
            element: <Cards />,
          },
          {
            path: paths.LEARN,
            element: <Learn />,
          },
          {
            path: paths.PACKS,
            element: <Packs />,
          },
        ],
      },
      {
        path: paths.AUTH,
        element: <Auth />,
        children: [
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
        ],
      },
    ],
  },
])
