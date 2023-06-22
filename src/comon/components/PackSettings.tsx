import { SearchInput } from "./SearchInput"
import { ShowPacksCards } from "./ShowPacksCards"
import { CardsCountSlider } from "./CardsCountSlider"
import { ClearFilter } from "./ClearFilter"
import Box from "@mui/material/Box"
import { PaginationComponent } from "./PaginationComponent"
import { FC } from "react"
import { usePackFilter } from "../../features/packs/hooks/usePackFilter"

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
    onChangePaginationHandler
  } = usePackFilter()

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
        <SearchInput value={search} onChange={onSearchTextChange} />
        <ShowPacksCards
          onClick={onClickShowPacksCard}
          onMy={onMy}
          setOnMy={setOnMy}
        />
        <CardsCountSlider
          minMax={sliderValue}
          onChange={onChangeSliderHandler}
          setMinMax={setSliderValue}
        />
        <ClearFilter resetFiltering={resetFiltering} />
      </Box>
      {children}
      <Box>
        <PaginationComponent
          onChangePaginationHandler={onChangePaginationHandler}
         
        />
      </Box>
    </>
  )
}
