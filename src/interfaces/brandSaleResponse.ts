import { SaleItem } from "./saleItem"
import { ResponseBase } from "./responseBase"

export interface BrandSaleResponse extends ResponseBase {
  data: BrandSalePromotion[]
}

interface BrandSalePromotion {
  item_groups: BrandSaleItemGroup[]
  promotionid: number
}

interface BrandSaleItemGroup {
  items: SaleItem[]
  shopid: number
  brandid: any | null
}
