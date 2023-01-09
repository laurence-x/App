import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UCX } from "../contexts/mainCTX"
import gck from "../fns/cookieGet"

export default function Lgd() {
	const { setUsr } = UCX()
	const nav = useNavigate()
	const [ lgd, setLogged ] = useState<string>()

	let lg = gck("lg")
	useEffect(() => {
		const controller = new AbortController()
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
				r === "vi" && setUsr({ nm: false, st: false }) // visitor
				r === "e" &&
					nav("/errors", { state: { r: "logged check error" } })
				r === "lu" && setUsr({ nm: String(gck("u")), st: true })
				setLogged(r)
			})
			.catch((e) => {
				console.log("Error Logged: ", e)
				nav("/errors", { state: { r: "logged status error" } })
			})
		return () => controller.abort()
	}, [ lg, nav, setUsr ])

	return lgd
}
