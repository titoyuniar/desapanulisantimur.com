export interface Page<T> {
  content: T[];
  currentPage: number;
  totalPages: number;
  totalElements: number;
  size: number;
}

export interface PageRequest {
  page: number;
  size?: number;
}
