interface FlashRequest {
  promotionid: number
  categoryid: number
  itemids: number[]
  sort_soldout: boolean
  limit: number
  need_personalize: boolean
  with_dp_items: boolean
}
