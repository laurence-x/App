import { ActTps } from "./atypes"

export const iniState = {
	loading: false,
	result: "",
	error: false,
}

export const reducer = (state: any, action: { type: any; payload: any }) => {
	switch (action.type) {
		case ActTps.fnRun:
			return {
				loading: true,
				error: false,
			}
		case ActTps.fnOky:
			return {
				loading: false,
				state, // ...state,
				result: action.payload,
			}
		case ActTps.fnErr:
			return {
				loading: false,
				error: true,
				result: false,
			}
		default:
			return {
				loading: false,
				error: false,
				result: state,
			}
	}
}
