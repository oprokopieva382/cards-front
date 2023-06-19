import { useEffect } from "react"
import "./App.css"
import { Header } from "./comon/components"
import { ComponentEntries } from "./comon/components"
import { FriendsPack } from "./comon/components/FriendsPack"
import { useAppDispatch } from "./comon/hooks"
import { authThunk } from "./features/auth/auth.slice"



export const App = () => {

// const dispatch = useAppDispatch()

//   useEffect(() => {
//     console.log("app")
//     dispatch(authThunk.me())
//   }, [])

  // const isLoading = useAppSelector((state) => state.app.isLoading)
  // const dispatch = useAppDispatch()

  // // useEffect(() => {
  // //   setTimeout(() => {
  // //     dispatch(appActions.setIsLoading({ isLoading: false }))
  // //   }, 3000)
  // // }, [])

  return (
    <div className="App">
      {/* <Counter /> */}
      <Header />
      <ComponentEntries />
{/* <FriendsPack/> */}
    </div>
  )
}
