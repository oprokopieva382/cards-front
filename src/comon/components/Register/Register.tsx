import { useAppDispatch } from "../../../app/hooks"
import { authThunk } from "../../../features/auth/auth.slice"
import s from "./Register.module.css"

export const Register = () => {

const dispatch = useAppDispatch()
const payload = {
  email: "oprokopieva382@gmail.com",
  password: "1qazxcvBG",
}
const registerHandler = () => {
  dispatch(authThunk.register(payload))
}

  return (
    <div className={s.container}>
      <h1>Register</h1>
      <button onClick={registerHandler}>register</button>
    </div>
  )
}