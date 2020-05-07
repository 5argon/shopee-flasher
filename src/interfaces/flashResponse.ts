import { ResponseBase } from "./responseBase"
import { SaleItem } from "./saleItem"

export interface FlashResponse extends ResponseBase {
  data: {
    items: SaleItem[]
  }
}
