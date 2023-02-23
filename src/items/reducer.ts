import { TpIcart } from "types/TpCTX"

const addI = (i: TpIcart, s: { cart: TpIcart[] }) => {
	const cIts = [ ...s.cart ]
	const nowI = cIts.findIndex((iX) => iX.Iid === i.Iid)
	if (nowI < 0) {
		cIts.push({ ...i, Iqt: 1 })
	} else {
		const upI = { ...cIts[ nowI ] }
		upI.Iqt!++
		cIts[ nowI ] = upI
	}
	return { ...s, cart: cIts }
}

const remI = (i: TpIcart, s: { cart: TpIcart[] }) => {
	const cIts = [ ...s.cart ]
	const nowI = cIts.findIndex((iX) => iX.Iid === i.Iid)
	const upI = { ...cIts[ nowI ] }
	upI.Iqt!--
	upI.Iqt! <= -1 ? cIts.splice(nowI, 1) : (cIts[ nowI ] = upI)
	return { ...s, cart: cIts }
}

export const reducer = (
	s: { cart: TpIcart[] },
	a: { type: string; it: TpIcart }
) => {
	switch (a.type) {
		case "iAdd":
			return addI(a.it, s)
		case "iDel":
			return remI(a.it, s)
		default:
			return s
	}
}
