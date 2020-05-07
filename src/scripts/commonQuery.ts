import axios from "axios"
import { SessionResponse } from "../interfaces/sessionResponse"
import { SessionInfo } from "../interfaces/sessionInfo"
import { SaleInterval } from "../interfaces/saleInterval"
export async function commonQuery(
  url: string,
  processor: (session: SessionInfo) => Promise<SaleInterval>
) {
  const allSession = await axios.get<SessionResponse>(url)
  const sessions = allSession.data.data.sessions
  const processSessionPromises = sessions.map((x) => processor(x))
  const processed = await Promise.all(processSessionPromises)
  return processed
}
