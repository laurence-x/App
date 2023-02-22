export type TpCxProv = {
	children: React.ReactNode
}

export type TpCxUsr = {
	nm: string | boolean
	st: boolean
}

export type TpIcart = {
	Iid: string
	Inm: string
	Iim: string
	Ipr: number
	Iqt?: number
}

export type TpCxVals = {
	usr: TpCxUsr | null
	setUsr: React.Dispatch<React.SetStateAction<TpCxUsr | null>>
	expand: boolean
	expandMenu: React.Dispatch<React.SetStateAction<boolean>>
	iSrcV: string
	setSrcV: React.Dispatch<React.SetStateAction<string>>
	// iCart: TpIcart[] | null
	// setiCart: React.Dispatch<React.SetStateAction<Array<TpIcart>>>
	cart: []
	ItoC: (i: TpIcart) => void
	IdeC: (i: TpIcart) => void
}
