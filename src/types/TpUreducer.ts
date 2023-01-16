export type TpStt = {
	val: number
}

export type TpAct = {
	type: "inc" | "dec" | "res"
	payload?: number
}
