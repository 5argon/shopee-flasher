import axios, { AxiosResponse } from "axios"
import { FlashResponse } from "../interfaces/flashResponse"
import { SessionInfo } from "../interfaces/sessionInfo"
import { GetAllItemsIdResponse } from "../interfaces/getAllItemIdsResponse"
import { SaleInterval } from "../interfaces/saleInterval"
import { paginateFifty } from "./paginateFifty"
import { header } from "./constants"

export async function processSessionFlashSale(
  session: SessionInfo
): Promise<SaleInterval> {
  const promotionId = session.promotionid
  const getAllItemsIdPath = `https://shopee.co.th/api/v2/flash_sale/get_all_itemids?promotionid=${promotionId}&sort_soldout=true`
  const getAllItemIdsResponse = await axios.get<GetAllItemsIdResponse>(
    getAllItemsIdPath
  )
  const items: number[] = getAllItemIdsResponse.data.data.item_brief_list.map(
    (x) => x.itemid
  )
  const itemsIdPaginated: number[][] = paginateFifty(items)
  const processItemsPromises = itemsIdPaginated.map((x) => processItems(x))
  const processed = await Promise.all(processItemsPromises)
  const interval: SaleInterval = {
    sessionInfo: session,
    items: processed.flat(),
  }
  return interval
  async function processItems(items: number[]) {
    const payload: FlashRequest = {
      categoryid: 0,
      limit: items.length,
      itemids: items,
      need_personalize: false,
      promotionid: promotionId,
      sort_soldout: true,
      with_dp_items: true,
    }
    const flashBatchGetItemsUrl =
      "https://shopee.co.th/api/v2/flash_sale/flash_sale_batch_get_items"
    const flashResponse = await axios.post<
      FlashRequest,
      AxiosResponse<FlashResponse>
    >(flashBatchGetItemsUrl, payload, { headers: header })
    return flashResponse.data.data.items
  }
}
