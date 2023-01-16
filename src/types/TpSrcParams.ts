export type TpPrms = {
	id: string
	type: string
	value: string
	placeholder: string
	name: string
	title: string
	alt: string
	autofocus: boolean
}

export type TpGprm = {
	preventDefault: () => void
	target: TpPrms
}
