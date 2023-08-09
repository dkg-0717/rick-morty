export type PaginatorType = {
  totalPages: number
  getNewPage: (n: number) => void
  currentPage: number
}