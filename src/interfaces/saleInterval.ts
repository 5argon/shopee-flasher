import { SaleItem } from "./saleItem"
import { SessionInfo } from "../interfaces/sessionInfo"

/**
 * At any moment there should be 4 sale intervals available for query.
 * Each one containing many items.
 */
export interface SaleInterval {
  sessionInfo: SessionInfo
  items: SaleItem[]
}
