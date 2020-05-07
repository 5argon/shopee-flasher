import { StatusCode, StringUrl, StringImage } from "./typeAliases"
import { CategoryInfo, Brand } from "./sessionResponse"

export interface SessionInfo {
  status: StatusCode
  description: string
  banner_url: StringUrl
  is_ongoing: boolean
  start_time: number
  name: string
  pc_banner: StringImage
  end_time: number
  banner: StringImage
  categories: CategoryInfo[]
  promotionid: number
  /**
   * Only available when requesting session from brand sale.
   */
  brands?: Brand[]
}
