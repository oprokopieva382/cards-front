import { profileSelector } from "../../features/auth/auth.selector"
import { useAppSelector } from "../hooks"

export const useAuth = () => {
  const profile = useAppSelector(profileSelector)
  const isProfileExists = () => Boolean(profile)
  const isUserAuth = isProfileExists()
  return { isUserAuth, profile }
}
