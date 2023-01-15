import { ActTps } from "./atypes"

export const initialStt = {
	loading: false,
	result: "",
	error: false,
}

export const reducer = (
	state: any,
	action: { type: any; payload?: string }
) => {
	switch (action.type) {
		case ActTps.fnRun:
			return {
				loading: true,
				error: false,
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
