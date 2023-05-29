import { Counter } from "./features/counter/Counter"
import "./App.css"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import { useEffect } from "react"
import { appActions } from "./app/app.slice"

function App() {

  const isLoadind = useAppSelector(state=> state.app.isLoading)

  const dispatch = useAppDispatch()

  useEffect(()=> {
    setTimeout(()=> {
      dispatch(appActions.setIsLoading({isLoading:false}))
    }, 3000)
  }, [])




  return (
    <div className="App">
     {isLoadind&& <h1>Loader...</h1>}
      <Counter />
        
    </div>
  )
}

export default App
