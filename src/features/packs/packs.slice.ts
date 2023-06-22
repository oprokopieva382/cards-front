import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { createAppAsyncThunk, thunkTryCatch } from "../../comon/utils"
import {
  AddPackType,
  ArgParamsType,
  GetPackResponseType,
  PackType,
  PacksAPI,
  UpdatePackType,
} from "./packs.api"

const getPacks = createAppAsyncThunk<{ packPage: GetPackResponseType }>(
  "pack/getPacks",
  async (data, ThunkAPI) => {
    return thunkTryCatch(ThunkAPI, async () => {
      const { getState } = ThunkAPI
      const params = getState().pack.params
      const res = await PacksAPI.getPacks(params)
      return { packPage: res.data }
    })
  },
)

const addNewPack = createAppAsyncThunk<{ pack: PackType }, AddPackType>(
  "pack/addNewPack",
  async (arg, ThunkAPI) => {
    return thunkTryCatch(ThunkAPI, async () => {
      const res = await PacksAPI.addPack(arg)
      return { pack: res.data.newCardsPack }
    })
  },
)

const deletePack = createAppAsyncThunk<{ packId: string }, string>(
  "pack/deletePack",
  async (arg, ThunkAPI) => {
    return thunkTryCatch(ThunkAPI, async () => {
      const res = await PacksAPI.deletePack(arg)
      return { packId: res.data.deletedCardsPack._id }
    })
  },
)
const updatePack = createAppAsyncThunk<{ pack: PackType }, UpdatePackType>(
  "pack/updatePack",
  async (arg, ThunkAPI) => {
    return thunkTryCatch(ThunkAPI, async () => {
      const res = await PacksAPI.updatePack(arg)
      return { pack: res.data.updatedCardsPack }
    })
  },
)

const slice = createSlice({
  name: "pack",
  initialState: {
    cardPacks: [] as PackType[],
    page: 1,
    pageCount: 4,
    cardPacksTotalCount: 2000,
    minCardsCount: 0,
    maxCardsCount: 100,
    params: {
      packName: "",
      min: "0",
      max: "100",
      page: "1",
      pageCount: "4",
      user_id: "",
    } as ArgParamsType,
  },
  reducers: {
    setParams: (state, action: PayloadAction<{ params: ArgParamsType }>) => {
      // state.params = { ...state.params, ...action.payload.params }
      return {...state, params : { ...state.params, ...action.payload.params }}
      
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPacks.fulfilled, (state, action) => {
        const packs = action.payload.packPage
        state.cardPacks = packs.cardPacks
        state.page = packs.page
        state.pageCount = packs.pageCount
        state.cardPacksTotalCount = packs.cardPacksTotalCount
        state.minCardsCount = packs.minCardsCount
        state.maxCardsCount = packs.maxCardsCount
      })
      .addCase(addNewPack.fulfilled, (state, action) => {
        state.cardPacks.unshift(action.payload.pack)
      })
      .addCase(deletePack.fulfilled, (state, action) => {
        state.cardPacks.filter((pack) => pack._id !== action.payload.packId)
      })
      .addCase(updatePack.fulfilled, (state, action) => {
        state.cardPacks.find((pack) =>
          pack._id === action.payload.pack._id
            ? (pack = action.payload.pack)
            : pack,
        )
      })
  },
})

export const packReducer = slice.reducer
export const packThunk = { getPacks, addNewPack, deletePack, updatePack }
export const packActions = slice.actions
