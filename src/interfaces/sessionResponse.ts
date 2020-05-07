import { StringImage } from "./typeAliases"
import { ResponseBase } from "../interfaces/responseBase"
import { SessionInfo } from "./sessionInfo"

export interface SessionResponse extends ResponseBase {
  data: SessionData
}

interface SessionData {
  current_session_end_time: number
  bs_info: any | null
  sessions: SessionInfo[]
}

export interface Brand {
  brandid: number | null
  custom_entrance_picture: StringImage
  custom_logo: StringImage
  custom_name: string
  item_count: number
  shop_name: string
  shopid: number
  slogan: string
  username: string
}

export interface CategoryInfo {
  catname: string
  image: StringImage
  catid: string
}
