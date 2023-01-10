import { sendT } from "types/recT"

export default async function send({ Em, ms, rD, nvg }: sendT) {
	const controller = new AbortController()
	let fData = new URLSearchParams()
	const nm = String(Em.current?.name)
	const vl = String(Em.current?.value)
	fData.append(nm, vl)
	await fetch("../php/u_rec.php", {
		method: "POST",
		body: fData,
		signal: controller.signal,
	})
		.then((response) => response.text())
		.then((r) => {
			if (r === "bk") {
				rD.current && (rD.current.textContent = "please contact us")
				const timer = setTimeout(() => {
					nvg("/")
				}, 10000)
				clearTimeout(timer)
			}
			if (r === "e") {
				rD.current && (rD.current.textContent = "error occurred")
				const timer = setTimeout(() => {
					nvg("/")
				}, 10000)
				clearTimeout(timer)
			}
			if (r === "no") {
				ms.current && (ms.current.textContent = "no valid user email")
				Em.current?.focus()
				return
			}
			if (r === "rs") {
				rD.current && (rD.current.textContent = "reset email sent")
				const timer = setTimeout(() => {
					nvg("/")
				}, 10000)
				clearTimeout(timer)
			}
		})
		.catch((error) => {
			rD.current && (rD.current.textContent = "try again later")
			console.error("Error Recovery: ", error)
		})
	return () => controller.abort()
}
