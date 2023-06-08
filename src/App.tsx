import "./App.css"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import { useEffect } from "react"
import { appActions } from "./app/app.slice"
import { Header } from "./comon/components/Header"
import { authThunk } from "./features/auth/auth.slice"

function App() {
useEffect(() => {
  dispatch(authThunk.me())
}, [])

  const isLoadind = useAppSelector((state) => state.app.isLoading)
  const dispatch = useAppDispatch()

  useEffect(() => {
    setTimeout(() => {
      dispatch(appActions.setIsLoading({ isLoading: false }))
    }, 3000)
  }, [])

   return (
    <div className="App">
      {isLoadind && <h1>Loader...</h1>}
      {/* <Counter /> */}
      <Header />
    </div>
  )
}

export default App
