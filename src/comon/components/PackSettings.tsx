import { SearchInput } from "./SearchInput"
import { ShowPacksCards } from "./ShowPacksCards"
import { CardsCountSlider } from "./CardsCountSlider"
import { ClearFilter } from "./ClearFilter"
import Box from "@mui/material/Box"

export const PackSettings = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      width="100%"
      margin="0 auto"
      padding=" 40px 0 24px 0 "
    >
      <SearchInput />
      <ShowPacksCards onMe={false} onClick={() => {}} />
      <CardsCountSlider minMax={[1]} onChange={() => {}} setMinMax={() => {}} />
      <ClearFilter clearFiltersHandler={() => {}} />
    </Box>
  )
}
