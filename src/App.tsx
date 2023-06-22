import "./App.css"
import { Header } from "./comon/components"
import { ComponentEntries } from "./comon/components"


export const App = () => {
  return (
    <div className="App">
      {/* <Counter /> */}
      <Header />
      <ComponentEntries />
    </div>
  )
}
