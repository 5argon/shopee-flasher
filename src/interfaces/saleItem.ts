import { StringImage } from "./typeAliases"

export interface SaleItem {
  itemid: number
  brand_sale_brand_custom_logo: any | string

  /**
   * Use `getImageUrl` on `SaleItem` to get an image URL made from this string.
   */
  image: StringImage
  shopid: number
  voucher?: {
    min_spend: number
    discount_percentage: number
    coin_percentage: null | number
    discount_value: number
    voucher_code: string
    reward_type: number
    promotionid: number
  }
  raw_discount: number
  price_before_discount: number
  flash_sale_type: number
  promo_overlay_image: string
  modelids: any | null
  promo_images: string[]
  /**
   * Price has been padded with zeroes.
   */
  price: number
  promotionid: number
  start_time: number
  reminder_count: number
  discount: string
  flash_catid: number
  reference_item_id: string
  is_shop_official: boolean
  flash_sale_stock: null | number
  name: string
  item_type: number
  end_time: number
  is_shop_preferred: boolean
  promo_name: string
  stock: number
  /**
   * When not null, e.g. "2?9"
   */
  hidden_price_display: string | null
}
