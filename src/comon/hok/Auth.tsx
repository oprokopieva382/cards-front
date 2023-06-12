import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import { paths } from "../routes/paths"
import { useAuth } from "../hooks/useAuth"

export const Auth = () => {
  const { isUserAuth } = useAuth()

  return isUserAuth ? <Navigate to={paths.PROFILE} /> : <Outlet />
}
