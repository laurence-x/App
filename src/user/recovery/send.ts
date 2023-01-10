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
				setTimeout(() => {
					nvg("/contact")
				}, 6000)
			}
			if (r === "e") {
				rD.current && (rD.current.textContent = "an error occurred")
				setTimeout(() => {
					nvg("/")
				}, 6000)
			}
			if (r === "no") {
				ms.current && (ms.current.textContent = "no valid user email")
				Em.current?.focus()
				return
			}
			if (r === "rs") {
				rD.current && (rD.current.textContent = "reset email sent")
				setTimeout(() => {
					nvg("/")
				}, 6000)
			}
		})
		.catch((error) => {
			rD.current && (rD.current.textContent = "try again later")
			console.error("Error Recovery: ", error)
		})
	return () => controller.abort()
}
