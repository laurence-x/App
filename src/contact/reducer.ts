import { TpStt, TpAct } from "types/TpContact"

export const initialStt: TpStt = {
	isIni: true,
	isLdg: false,
	isOky: false,
	isErr: false,
	data: "",
}

export const reducer = (state: TpStt, action: TpAct) => {
	switch (action.type) {
		case "run":
			return {
				...state,
				isIni: false,
				isLdg: true,
				isOky: false,
				isErr: false,
				data: action.payload,
			}
		case "oky":
			return {
				...state,
				isIni: false,
				isLdg: false,
				isOky: true,
				isErr: false,
				data: action.payload,
			}
		case "err":
			return {
				...state,
				isIni: false,
				isLdg: false,
				isOky: false,
				isErr: true,
				data: action.payload,
			}
		default:
			return {
				...state,
				isIni: false,
				isLdg: false,
				isOky: true,
				isErr: false,
			}
	}
}
