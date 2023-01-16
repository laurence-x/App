import { TpAct } from "types/TpContact"
import { ActTps } from "./atypes"

export const initialStt = {
	loading: false,
	error: false,
	result: false,
}

export const reducer = (state: any, action: TpAct) => {
	switch (action.type) {
		case ActTps.fnRun:
			return {
				loading: true,
				error: false,
				result: false,
			}
		case ActTps.fnOky:
			return {
				loading: false,
				state, // ...state, // if json
				result: action.payload,
			}
		case ActTps.fnErr:
			return {
				loading: false,
				error: true,
				result: action.payload,
			}
		default:
			return {
				loading: false,
				error: false,
				result: state,
			}
	}
}
