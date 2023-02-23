// context children
export type TpCxProv = {
	children: React.ReactNode
}

// user related
export type TpCxUsr = {
	nm: string | boolean
	st: boolean
}

// items in cart
export type TpIcart = {
	Iid: string
	Inm: string
	Iim: string
	Ipr: number
	iCt?: number
}

// context provider values
export type TpCxVals = {
	usr: TpCxUsr | null
	setUsr: React.Dispatch<React.SetStateAction<TpCxUsr | null>>
	expand: boolean
	expandMenu: React.Dispatch<React.SetStateAction<boolean>>
	iSrcV: string
	setSrcV: React.Dispatch<React.SetStateAction<string>>
	cart: []
	ItoC: (i: TpIcart) => void
	IdeC: (i: TpIcart) => void
}
