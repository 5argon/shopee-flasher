export interface ResponseBase {
  version: string
  error_msg: string | null
  error: number
  data: any
}
