import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UCX } from "../contexts/mainCTX"
import gck from "../fns/cookieGet"

export default function Lgd() {
	const { setUsr } = UCX()
	const nav = useNavigate()
	const [ lstat, setLstat ] = useState<string>()
	let lg = gck("lg")
	useEffect(() => {
		const controller = new AbortController()
		if (lg) {
			let fData = new URLSearchParams()
			fData.append("lgd", String(lg))
			fetch("../php/lgd.php", {
				method: "POST",
				body: fData,
				signal: controller.signal,
			})
				.then(async (r) => await r.text())
				.then((r) => {
					r === "rd" && window.open("https://www.google.com", "_self")
					r === "vi" && setUsr({ nm: false, st: false })
					r === "e" && nav("/errors", { state: { r: "back e res" } })
					r === "lu" && setUsr({ nm: String(gck("u")), st: true })
					setLstat(r)
				})
				.catch((e) => {
					setUsr({ nm: false, st: false })
					console.log("Error Logged: ", e)
					nav("/errors", { state: { r: "lgd catch err" } })
				})
		}
		return () => controller.abort()
	}, [ lg, nav, setUsr ])
	return lstat
}
