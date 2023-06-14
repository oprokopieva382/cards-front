import { PackNavigator } from "../../../comon/components/PackNavigator"
import { PackSettings } from "../../../comon/components/PackSettings"

export const Packs = () => {
  return (
    <>
      <PackNavigator title="Packs list" buttonTitle="Add new pack" />
      <PackSettings />
         </>
  )
}