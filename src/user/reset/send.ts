import { sendT } from "types/resetT"

export default async function send({ Pw, Pw2, rD, nvg, hdc }: sendT) {
	let fData = new URLSearchParams()
	for (let el of [ Pw, Pw2 ]) {
		const nm = String(el.current?.name)
		const vl = String(el.current?.value)
		fData.append(nm, vl)
	}
	const controller = new AbortController()
	await fetch("../php/u_res.php?h=" + hdc, {
		method: "POST",
		body: fData,
		signal: controller.signal,
	})
		.then((response) => response.text())
		.then((r) => {
			r === "rD" && window.open("https://google.com", "_self")
			if (r === "e") {
				rD.current && (rD.current.textContent = "some error occurred")
				const timer = setTimeout(() => {
					nvg("/")
				}, 10000)
				clearTimeout(timer)
			}
			if (r === "ex") {
				rD.current && (rD.current.textContent = "reset again")
				const timer = setTimeout(() => {
					nvg("/rec")
				}, 6000)
				clearTimeout(timer)
			}
			if (r === "rs") {
				rD.current && (rD.current.textContent = "password reset")
				const timer = setTimeout(() => {
					nvg("/login")
				}, 10000)
				clearTimeout(timer)
			}
		})
		.catch((error) => {
			rD.current && (rD.current.textContent = "try again later")
			console.error("Error Reset: ", error)
		})
	return () => controller.abort()
}
