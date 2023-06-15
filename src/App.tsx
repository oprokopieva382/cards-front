import "./App.css"
import { Header } from "./comon/components"
import { ComponentEntries } from "./comon/components"
import { FriendsPack } from "./comon/components/FriendsPack"



export const App = () => {
  // useEffect(() => {
  //   console.log("app")
  //   dispatch(authThunk.me())
  // }, [])

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
      {/* <ComponentEntries /> */}
<FriendsPack/>
    </div>
  )
}
