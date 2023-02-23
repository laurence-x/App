import { TpIcart } from "types/TpCTX"

// adding an item to the cart
const addI = (i: TpIcart, s: { c: TpIcart[] }) => {
	const cIts = [ ...s.c ] // get the state of the cart items
	const iP = cIts.findIndex((iX) => iX.Iid === i.Iid) // get item position
	if (iP < 0) {
		cIts.push({ ...i, iCt: 1 }) // set count for actual item to 1 if none
	} else {
		const iC = { ...cIts[ iP ] } // get item from cart state
		iC.iCt!++ // increase count for actual item
		cIts[ iP ] = iC // assign updated item to one in cart state
	}
	return { ...s, c: cIts }
}

// removing an item from the cart
const remI = (i: TpIcart, s: { c: TpIcart[] }) => {
	const cIts = [ ...s.c ] // get the state of the cart items
	const iP = cIts.findIndex((iX) => iX.Iid === i.Iid) // get item position
	const iC = { ...cIts[ iP ] } // get item from cart state
	iC.iCt!-- // decrease item count
	// delete item if count in cart state is 0, else leave as it is
	iC.iCt! <= -1 ? cIts.splice(iP, 1) : (cIts[ iP ] = iC)
	return { ...s, c: cIts }
}

export const reducer = (
	s: { c: TpIcart[] },
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
