import { TpIcart } from "types/TpCTX"

export const iAdd = "iAdd"
export const iDel = "iDel"

const addI = (i: TpIcart, state: { cart: any }) => {
	console.log("Adding ID to cart: " + i.Iid)

	const updatedCart = [ ...state.cart ]
	const updatedItemIndex = updatedCart.findIndex(
		(item) => item.Iid === i.Iid
	)

	if (updatedItemIndex < 0) {
		updatedCart.push({ ...i, Iqt: 1 })
	} else {
		const updatedItem = {
			...updatedCart[ updatedItemIndex ],
		}
		updatedItem.Iqt++
		updatedCart[ updatedItemIndex ] = updatedItem
	}
	return { ...state, cart: updatedCart }
}

const remI = (i: TpIcart, state: { cart: any }) => {
	console.log("Removing ID from cart: " + i.Iid)

	const updatedCart = [ ...state.cart ]
	const updatedItemIndex = updatedCart.findIndex(
		(item) => item.Iid === i.Iid
	)

	const updatedItem = {
		...updatedCart[ updatedItemIndex ],
	}
	updatedItem.Iqt--
	if (updatedItem.Iqt <= 0) {
		updatedCart.splice(updatedItemIndex, 1)
	} else {
		updatedCart[ updatedItemIndex ] = updatedItem
	}
	return { ...state, cart: updatedCart }
}

export const shopReducer = (
	state: any,
	action: { type: any; it: any }
) => {
	switch (action.type) {
		case iAdd:
			return addI(action.it, state)
		case iDel:
			return remI(action.it, state)
		default:
			return state
	}
}
