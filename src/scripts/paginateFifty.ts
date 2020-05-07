export function paginateFifty<T>(items: T[]) {
  const pagination = Math.ceil(items.length / 50)
  const itemsIdPaginated: T[][] = []
  for (let i = 0; i < pagination; i++) {
    const lengthFrom = i * 50
    const lengthTo = Math.min((i + 1) * 50, items.length)
    const paginated = items.slice(lengthFrom, lengthTo)
    itemsIdPaginated.push(paginated)
  }
  return itemsIdPaginated
}
