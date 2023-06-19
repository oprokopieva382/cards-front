import { createSlice } from "@reduxjs/toolkit"
import { createAppAsyncThunk, thunkTryCatch } from "../../comon/utils"
import {
  AddPackType,
  ArgParamsType,
  GetPackResponseType,
  PackType,
  PacksAPI,
} from "./packs.api"

const getPacks = createAppAsyncThunk<
  { pack: GetPackResponseType },
  ArgParamsType
>("pack/getPacks", async (data, ThunkAPI) => {
  return thunkTryCatch(ThunkAPI, async () => {
    const res = await PacksAPI.getPacks(data)
    return { pack: res.data }
  })
})

const addNewPack = createAppAsyncThunk<{ newCardsPack: PackType }, AddPackType>(
  "pack/addNewPack",
  async (data, ThunkAPI) => {
    return thunkTryCatch(ThunkAPI, async () => {
      const res = await PacksAPI.addPack(data)
      return { newCardsPack: res.data }
    })
  },
)

const slice = createSlice({
  name: "pack",
  initialState: {
    packs: {} as GetPackResponseType,
    params: {
      packName: "",
      min: "0",
      max: "100",
      page: "1",
      pageCount: "5",
      user_id: "",
      sortPacks: "0updated",
    } as ArgParamsType,
  },
  reducers: {
    // setParams: (state, action) => {
    //   state.params.user_id = action.payload
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPacks.fulfilled, (state, action) => {
        state.packs = action.payload.pack
      })
      .addCase(addNewPack.fulfilled, (state, action) => {
        state.packs.cardPacks.push(action.payload.newCardsPack)
      })
  },
})

export const packReducer = slice.reducer
export const packThunk = { getPacks, addNewPack }
export const packActions = slice.actions
