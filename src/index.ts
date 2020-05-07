import { SaleItem } from "./interfaces/saleItem"
import { processSessionBrandSale } from "./scripts/processSessionBrandSale"
import { processSessionFlashSale } from "./scripts/processSessionFlashSale"
import { commonQuery } from "./scripts/commonQuery"
import { SaleInterval } from "./interfaces/saleInterval"

/**
 * Returns usually 4 intervals with all items available in each.
 */
export async function flashSaleQuery(): Promise<SaleInterval[]> {
  return await commonQuery(
    "https://shopee.co.th/api/v2/flash_sale/get_all_sessions",
    processSessionFlashSale
  )
}

/**
 * Brand sale is an official brand that appears in the middle of flash sale page.
 * They are also categorized into the same interval as flash sale.
 */
export async function brandSaleQuery(): Promise<SaleInterval[]> {
  return await commonQuery(
    "https://shopee.co.th/api/v2/flash_sale/brand_sale_get_all_sessions?sort_soldout=true",
    processSessionBrandSale
  )
}

/**
 * Get a URL that fetch an image of an item.
 */
export function getImageUrl(saleItem: SaleItem, lowQuality: boolean): string {
  return `https://cf.shopee.co.th/file/${saleItem.image}${
    lowQuality ? "_tn" : ""
  }`
}
