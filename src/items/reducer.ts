import { TpIcart } from "types/TpCTX"

export const iAdd = "iAdd"
export const iDel = "iDel"

const addI = (i: TpIcart, state: { cart: any }) => {
	const cIts = [ ...state.cart ]
	const nowI = cIts.findIndex((item) => item.Iid === i.Iid)
	if (nowI < 0) {
		cIts.push({ ...i, Iqt: 1 })
	} else {
		const upI = { ...cIts[ nowI ] }
		upI.Iqt++
		cIts[ nowI ] = upI
	}
	return { ...state, cart: cIts }
}

const remI = (i: TpIcart, state: { cart: any }) => {
	const cIts = [ ...state.cart ]
	const nowI = cIts.findIndex((item) => item.Iid === i.Iid)
	const upI = { ...cIts[ nowI ] }
	upI.Iqt--
	upI.Iqt <= 0 ? cIts.splice(nowI, 1) : (cIts[ nowI ] = upI)
	return { ...state, cart: cIts }
}

export const reducer = (state: any, a: { type: any; it: any }) => {
	switch (a.type) {
		case iAdd:
			return addI(a.it, state)
		case iDel:
			return remI(a.it, state)
		default:
			return state
	}
}
