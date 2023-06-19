import { useEffect } from "react"
import { authThunk } from "../../features/auth/auth.slice"
import Box from "@mui/material/Box"
import LinearProgress from "@mui/material/LinearProgress"
import Container from "@mui/material/Container"
import { AppPreloader } from "./AppPreloader"
import { Outlet } from "react-router-dom"
import { isAppLoading, isInitialized } from "../../app/app.selectors"
import { useAppDispatch, useAppSelector } from "../hooks"

export const ComponentEntries = () => {
  const dispatch = useAppDispatch()

  const isLoading = useAppSelector(isAppLoading)
  const isAppInitialized = useAppSelector(isInitialized)
  console.log(isAppInitialized)
  console.log(isLoading)

  useEffect(() => {
    dispatch(authThunk.me())
  }, [])
  return (
    <>
      <Box sx={{ height: "4px" }}>{isLoading && <LinearProgress />}</Box>
      <Container fixed>
        {!isAppInitialized ? <AppPreloader /> : <Outlet />}
      </Container>
    </>
  )
}
