import { sendT } from "types/contactT"

const send = async ({ iN, iT, iE, tA, rD, nvg }: sendT) => {
	let fData = new URLSearchParams()
	for (let el of [ iN, iT, iE, tA ]) {
		const nm = String(el.current?.name)
		const vl = String(el.current?.value)
		fData.append(nm, vl)
	}
	const controller = new AbortController()
	await fetch("../php/contact.php", {
		method: "POST",
		body: fData,
		signal: controller.signal,
	})
		.then((response) => response.text())
		.then((r) => {
			let mess =
				r === "s"
					? "sent"
					: r === "l"
						? "try again in 1h"
						: "an error occurred"
			rD.current && (rD.current.textContent = mess)
			setTimeout(() => {
				nvg("/")
			}, 10000)
		})
		.catch((error) => {
			rD.current && (rD.current.textContent = "try again later")
			console.error("Error Contact:", error)
		})
	return () => controller.abort()
}

export default send
