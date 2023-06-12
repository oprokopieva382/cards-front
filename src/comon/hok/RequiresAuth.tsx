import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import { paths } from "../routes/paths"
import { useAuth } from "../hooks/useAuth"

export const RequiresAuth = () => {
 const { isUserAuth } = useAuth()

  return <>
  {isUserAuth ? <Outlet /> : <Navigate to={paths.LOGIN} />}
  </>
}
