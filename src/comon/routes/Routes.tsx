import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import { LogIn } from "../../features/components/LogIn";
import { paths } from "./paths";
import { Register } from "../../features/components/Register";

export const router = createBrowserRouter([
  {
    path: paths.MAIN,
    element: <App />,
  },
  {
    path: paths.LOGIN,
    element: <LogIn />,
  },
  {
    path: paths.REGISTER,
    element: <Register />,
  },
])
