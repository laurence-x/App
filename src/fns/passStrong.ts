const PassStrenght = (p: string) => {
	let res = !p.match(/[a-z]/)
		? "Include a lowercase letter"
		: !p.match(/[A-Z]/)
			? "Include a uppercase letters"
			: !p.match(/\d/)
				? "Include a number"
				: !p.match(/[^a-zA-Z\d]/)
					? "Include a special character"
					: "ok"

	return res
}

export default PassStrenght
