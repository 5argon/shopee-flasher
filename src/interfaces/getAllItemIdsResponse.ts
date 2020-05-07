import { StatusCode } from "../interfaces/typeAliases"

export interface GetAllItemsIdResponse {
  version: string
  data: {
    items: any | null
    item_brief_list: ItemInfo[]

    /**
     * This is a subset of `item_brief_list`
     */
    selling_out_item_brief_list: ItemInfoSellingOut[]
    promotionid: number
  }
  error_msg: string | null
  error: StatusCode
}

interface ItemInfo extends ItemInfoSellingOut {
  catid: number
}

interface ItemInfoSellingOut {
  itemid: number
  recommendation_info: null | string
  from: null | string
}
