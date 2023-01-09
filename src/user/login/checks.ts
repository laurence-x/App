import { checksT } from "types/loginT"
import send from "./send"

const checks = ({ Em, Pw, ms, iB, rD, nvg }: checksT) => {
	iB.current && (iB.current.style.visibility = "hidden")

	// minimum lenght check
	for (let el of [ Em, Pw ]) {
		const ell = Number(el.current?.value.length)
		const min = Number(el.current?.minLength)
		if (ell < min) {
			ms.current && (ms.current.style.display = "block")
			ms.current && (ms.current.textContent = `minimum ${min} chars`)
			el.current?.focus()
			return
		}
	}

	// valid email format check
	if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(String(Em.current?.value))) {
		ms.current && (ms.current.style.display = "block")
		ms.current && (ms.current.textContent = "email not valid")
		Em.current?.focus()
		return
	}

	ms.current && (ms.current.style.display = "block")
	ms.current && (ms.current.textContent = "sending...")
	send({ Em, Pw, ms, rD, nvg })
}

export default checks
