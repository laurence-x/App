export type TpCxProv = {
	children: React.ReactNode
}

export type TpCxUsr = {
	nm: string | boolean
	st: boolean
}

export type TpIcart = {
	p_id?: string
	p_nm?: string
	p_im?: string
	p_pr?: number
}

export type TpCxVals = {
	usr: TpCxUsr | null
	setUsr: React.Dispatch<React.SetStateAction<TpCxUsr | null>>
	expand: boolean
	expandMenu: React.Dispatch<React.SetStateAction<boolean>>
	iSrcV: string
	setSrcV: React.Dispatch<React.SetStateAction<string>>
	iToCart: (itm: TpIcart) => void
	iCart: TpIcart[] | null
	setiCart: React.Dispatch<React.SetStateAction<Array<TpIcart>>>
}
