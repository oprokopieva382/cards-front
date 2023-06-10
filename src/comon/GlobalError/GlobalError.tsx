import { toast, ToastContainer } from "react-toastify"
import { useEffect } from "react"
import { appActions } from "../../app/app.slice"
import { useAppDispatch, useAppSelector } from "../../app/hooks"

export const GlobalError = () => {
  const error = useAppSelector((state) => state.app.error)
  const dispatch = useAppDispatch()

  if (error !== null) {
    toast.error(error)
  }

  // Данный код необходим для того, чтобы занулять ошибку в стейте
  // после того как ошибка установилась.
  useEffect(() => {
    if (error !== null) {
      setTimeout(() => {
        dispatch(appActions.setAppError({ error: null }))
      }, 1000)
    }
  }, [error])

  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  )
}
