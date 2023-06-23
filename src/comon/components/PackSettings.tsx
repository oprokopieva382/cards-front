import { SearchInput } from "./SearchInput"
import { ShowPacksCards } from "./ShowPacksCards"
import { CardsCountSlider } from "./CardsCountSlider"
import { ClearFilter } from "./ClearFilter"
import Box from "@mui/material/Box"
import { PaginationComponent } from "./PaginationComponent"
import { FC } from "react"
import { usePackFilter } from "../../features/packs/hooks/usePackFilter"
import { useAppState } from "../hooks"

type PackPropsType = {
  children: React.ReactNode
}

export const PackSettings: FC<PackPropsType> = ({ children }) => {
  const {
    search,
    onSearchTextChange,
    onClickShowPacksCard,
    onMy,
    setOnMy,
    sliderValue,
    setSliderValue,
    onChangeSliderHandler,
    resetFiltering,
    onChangePaginationHandler,
  } = usePackFilter()
const {isLoading}= useAppState()
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        width="100%"
        margin="0 auto"
        padding=" 40px 0 24px 0 "
      >
        <SearchInput
          value={search}
          onChange={onSearchTextChange}
          disabled={isLoading}
        />
        <ShowPacksCards
          onClick={onClickShowPacksCard}
          onMy={onMy}
          setOnMy={setOnMy}
          disabled={isLoading}
        />
        <CardsCountSlider
          minMax={sliderValue}
          onChange={onChangeSliderHandler}
          setMinMax={setSliderValue}
          disabled={isLoading}
        />
        <ClearFilter resetFiltering={resetFiltering} disabled={isLoading} />
      </Box>
      {children}
      <Box>
        <PaginationComponent
          onChangePaginationHandler={onChangePaginationHandler}
          disabled={isLoading}
        />
      </Box>
    </>
  )
}
