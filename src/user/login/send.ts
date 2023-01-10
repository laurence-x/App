import { sendT } from "types/loginT"

export default async function send({ Em, Pw, ms, rD, nvg }: sendT) {
	const controller = new AbortController()
	let fData = new URLSearchParams()
	for (let el of [ Em, Pw ]) {
		const nm = String(el.current?.name)
		const vl = String(el.current?.value)
		fData.append(nm, vl)
	}
	await fetch("../php/u_log.php", {
		method: "POST",
		body: fData,
		signal: controller.signal,
	})
		.then((response) => response.text())
		.then((r) => {
			if (r === "bk") {
				rD.current && (rD.current.textContent = "blocked for 24h")
				const timer = setTimeout(() => {
					nvg("/")
				}, 10000)
				clearTimeout(timer)
			}
			if (r === "e") {
				rD.current && (rD.current.textContent = "some error occurred")
				const timer = setTimeout(() => {
					nvg("/")
				}, 10000)
				clearTimeout(timer)
			}
			if (r === "no") {
				ms.current && (ms.current.textContent = "not a valid user")
				Em.current?.focus()
				return
			}
			if (r === "wp") {
				ms.current && (ms.current.textContent = "wrong password")
				Pw.current?.focus()
				return
			}
			if (r === "rc") {
				rD.current && (rD.current.textContent = "recover password")
				const timer = setTimeout(() => {
					nvg("/rec")
				}, 6000)
				clearTimeout(timer)
			}
			if (r === "lo") {
				rD.current && (rD.current.textContent = "logged")
				const timer = setTimeout(() => {
					nvg("/")
				}, 2000)
				clearTimeout(timer)
			}
		})
		.catch((error) => {
			rD.current && (rD.current.textContent = "try again later")
			console.error("Error Login: ", error)
		})
	return () => controller.abort()
}
