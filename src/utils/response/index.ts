export type ApiResponse<T> = {
  statusCode: number;
  message: string;
  data: T | null;
  error: Error | null;
};
