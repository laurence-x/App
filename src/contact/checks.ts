import { checkT } from "types/contactT"
export default function checks({ iN, iT, iE, iE2, tA, ms }: checkT) {
	for (let el of [ iN, iT, iE, iE2, tA ]) {
		// minimum length check
		const ell = Number(el.current?.value.length)
		const min = Number(el.current?.minLength)
		if (ell < min) {
			ms.current && (ms.current.style.display = "block")
			ms.current && (ms.current.textContent = `minimum ${min} chars`)
			el.current?.focus()
			return false
		}
		// remove potentially dangerous chars
		el.current?.value &&
			(el.current.value = el.current.value.replace(
				/[`$;'"<>{}[\]\\/]/gi,
				""
			))
	}

	// valid email format check
	if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(String(iE.current?.value))) {
		ms.current && (ms.current.style.display = "block")
		ms.current && (ms.current.textContent = "email not valid")
		iE.current?.focus()
		return false
	}

	// equal email values check
	if (String(iE.current?.value) !== String(iE2.current?.value)) {
		ms.current && (ms.current.style.display = "block")
		ms.current && (ms.current.textContent = "emails not equal")
		iE2.current?.focus()
		return false
	}

	return true
}
