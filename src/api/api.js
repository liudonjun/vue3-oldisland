import { getAction, postAction } from "./merge"

export const getMsg = (params) => getAction("/getMsg", params)

export const createMsg = (params) => postAction("/createMsg", params)
