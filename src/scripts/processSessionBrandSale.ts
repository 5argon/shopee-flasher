import axios, { AxiosResponse } from "axios"
import { SessionInfo } from "../interfaces/sessionInfo"
import { SaleInterval } from "../interfaces/saleInterval"
import { BrandSaleResponse } from "../interfaces/brandSaleResponse"
import { paginateFifty } from "./paginateFifty"
import { header } from "./constants"

export async function processSessionBrandSale(
  session: SessionInfo
): Promise<SaleInterval> {
  const promotionId = session.promotionid
  if (session.brands === undefined) {
    throw new Error("Brand field should be available on brand sale query.")
  }
  const items = session.brands.map((x) => x.shopid)
  const itemsIdPaginated: number[][] = paginateFifty(items)
  const processItemsPromises = itemsIdPaginated.map((x) => processItems(x))
  const processed = await Promise.all(processItemsPromises)
  const interval: SaleInterval = {
    sessionInfo: session,
    items: processed.flat(),
  }
  return interval
  async function processItems(items: number[]) {
    const payload: BrandSaleRequest = {
      limit_per_shop: 1,
      promotionids: [promotionId],
      shopids: items,
      sort_soldout: true,
    }
    const brandBatchGetItemsUrl =
      "https://shopee.co.th/api/v2/flash_sale/brand_sale_batch_get_items"
    const flashResponse = await axios.post<
      BrandSaleRequest,
      AxiosResponse<BrandSaleResponse>
    >(brandBatchGetItemsUrl, payload, { headers: header })
    const itg = flashResponse.data.data.map((x) => x.item_groups).flat()
    return itg.map((x) => x.items).flat()
  }
}
