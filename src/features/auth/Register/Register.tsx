import { useAppDispatch } from "../../../app/hooks"
import { authThunk } from "../auth.slice"
import s from "./Register.module.css"

export const Register = () => {
  const dispatch = useAppDispatch()
  const arg = {
    email: "prokopieva382@gmail.com",
    password: "nthgtybt2",
  }
  const registerHandler = () => {
    dispatch(authThunk.register(arg))
  }

  return (
    <div className={s.container}>
      <h1>Register</h1>
      <button onClick={registerHandler}>register</button>
    </div>
  )
}
