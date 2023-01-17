export type keyUpEmT = {
	iE: React.RefObject<HTMLInputElement>
	iE2: React.RefObject<HTMLInputElement>
	ms: React.RefObject<HTMLParagraphElement>
	iB: React.RefObject<HTMLInputElement>
}

export type keyUpTeT = {
	iT: React.RefObject<HTMLInputElement>
	ms: React.RefObject<HTMLParagraphElement>
	iB: React.RefObject<HTMLInputElement>
}

export type checkT = {
	iN: React.RefObject<HTMLInputElement>
	iT: React.RefObject<HTMLInputElement>
	iE: React.RefObject<HTMLInputElement>
	iE2: React.RefObject<HTMLInputElement>
	tA: React.RefObject<HTMLTextAreaElement>
	ms: React.RefObject<HTMLParagraphElement>
}

export type TpStt = {
	isIni: boolean
	isLdg: boolean
	isOky: boolean
	isErr: boolean
	data: string
}

export type TpAct = {
	type: "run" | "oky" | "err"
	payload: string
}
