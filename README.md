# shopee-flasher

Query all available Flash Sale items at current time from https://shopee.co.th/.

Returns an array of [`SaleInterval`](./src/interfaces/saleInterval.ts). Each one corresponds to time interval such as 0:00-12:00. There usually should be 4 of them like what you see on the flash sale page. Then you can find [`SaleItem[]`](./src/interfaces/saleItem.ts) in there which contains useful data about each item.

## API

```ts
/**
 * Returns usually 4 intervals with all items available in each.
 */
async function flashSaleQuery(): Promise<SaleInterval[]>

/**
 * Brand sale is an official brand that appears in the middle of flash sale page.
 * They are also categorized into the same interval as flash sale.
 */
async function brandSaleQuery(): Promise<SaleInterval[]>

/**
 * Get a URL that fetch an image of an item.
 */
function getImageUrl(saleItem: SaleItem, lowQuality: boolean): string
```