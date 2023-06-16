import { createSlice } from "@reduxjs/toolkit"
import { createAppAsyncThunk, thunkTryCatch } from "../../comon/utils"
import { ArgParamsType, GetPackResponseType, PacksAPI } from "./packs.api"

const getPacks = createAppAsyncThunk<
  { pack: GetPackResponseType }
>("pack/getPacks", async (data, ThunkAPI) => {
  return thunkTryCatch(ThunkAPI, async () => {
    const {getState} = ThunkAPI
    const params = getState().pack.params
    const res = await PacksAPI.getPacks(params)
    return { pack: res.data }
  })
})

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
      sortPacks: "0updated"
    } as ArgParamsType,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPacks.fulfilled, (state, action)=> {
      state.packs = action.payload.pack
    })
  },
})

export const packReducer = slice.reducer
export const authThunk = { getPacks }
