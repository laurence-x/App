import { TpStt, TpAct } from "types/TpContact"

export const initialStt: TpStt = {
	loading: false,
	error: false,
	result: false,
}


export const reducer = (state: any, action: TpAct) => {
	switch (action.type) {
		case "run":
			return {
				loading: true,
				error: false,
				result: false,
			}
		case "oky":
			return {
				loading: false,
				error: false,
				result: action.state,
			}
		case "err":
			return {
				loading: false,
				error: true,
				result: action.state,
			}
		default:
			return {
				loading: false,
				error: false,
				result: state,
			}
	}
}
