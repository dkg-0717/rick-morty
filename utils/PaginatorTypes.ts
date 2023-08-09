export type PaginatorProps = {
  totalPages: number;
  getNewPage: (n: number) => void;
  currentPage: number;
}