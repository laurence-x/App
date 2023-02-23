import { TpIcart } from "types/TpCTX"

export const iAdd = "iAdd"
export const iDel = "iDel"

const addI = (i: TpIcart, state: { cart: TpIcart[] }) => {
	const cIts = [ ...state.cart ]
	const nowI = cIts.findIndex((item) => item.Iid === i.Iid)
	if (nowI < 0) {
		cIts.push({ ...i, Iqt: 1 })
	} else {
		const upI = { ...cIts[ nowI ] }
		upI.Iqt!++
		cIts[ nowI ] = upI
	}
	return { ...state, cart: cIts }
}

const remI = (i: TpIcart, state: { cart: TpIcart[] }) => {
	const cIts = [ ...state.cart ]
	const nowI = cIts.findIndex((item) => item.Iid === i.Iid)
	const upI = { ...cIts[ nowI ] }
	upI.Iqt!--
	upI.Iqt! <= -1 ? cIts.splice(nowI, 1) : (cIts[ nowI ] = upI)
	return { ...state, cart: cIts }
}

export const reducer = (
	state: { cart: TpIcart[] },
	a: { type: string; it: TpIcart }
) => {
	switch (a.type) {
		case iAdd:
			return addI(a.it, state)
		case iDel:
			return remI(a.it, state)
		default:
			return state
	}
}
