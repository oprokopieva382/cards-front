import { instance } from "../../comon/api/common.api"

export const PacksAPI = {
  getPacks: (params: ArgParamsType = {}) => {
    return instance.get<GetPackResponseType>("cards/pack", { params: params })
  },
  addPack: (cardsPack: AddPackType) => {
    return instance.post<CreatePackResponseType>("cards/pack", { cardsPack })
  },
  deletePack: (id: string) => {
    return instance.delete<DeletedPackResponseType>(`cards/pack?id=${id}`)
  },
  updatePack: (cardsPack: PackType) => {
    return instance.put<UpdatedPackResponseType>("cards/pack", { cardsPack })
  },
}

export type GetPackResponseType = {
  cardPacks: PackType[]
  cardPacksTotalCount: number
  maxCardsCount: number
  minCardsCount: number
  page: number
  pageCount: number
}

export type ArgParamsType = {
  packName?: string
  min?: string
  max?: string
  sortPacks?: "0updated" | "1updated"
  page?: string
  pageCount?: string
  user_id?: string
  block?: boolean
}
export type PackType = {
  _id: string
  user_id?: string
  user_name?: string
  private?: boolean
  name: string
  path?: string
  grade?: number
  shots?: number
  cardsCount?: number
  type?: "pack"
  rating?: number
  created?: string
  updated?: string
  more_id?: string
  __v?: number
}

export type CreatePackResponseType = {
  newCardsPack: PackType
  token: string
  tokenDeathTime: number
}
export type DeletedPackResponseType = {
  deletedCardsPack: PackType
  token: string
  tokenDeathTime: number
}
export type UpdatedPackResponseType = {
  updatedCardsPack: PackType
  token: string
  tokenDeathTime: number
}
export type UpdatePackType = {
  _id: string
  name: string
  }

export type AddPackType = {
  name?: string
  deckCover?: string
  private?: boolean
}
