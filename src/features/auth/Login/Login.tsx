import { useAppDispatch } from "../../../app/hooks"
import { authThunk } from "../auth.slice"


export const Login = () => {
  const dispatch = useAppDispatch()
  const arg = {
    email: "prokopieva382@gmail.com",
    password: "nthgtybt2",
    rememberMe: false,
  }
  const loginHandler = () => {
    dispatch(authThunk.login(arg))
  }

  return (
    <div className="container">
      <h1>Login</h1>
      <button onClick={loginHandler}>Login</button>
    </div>
  )
}
