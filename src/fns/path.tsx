import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import mItems from "../menu/m_Items"
import Lgd from "../user/lgd"

const Path = () => {
	const nav = useNavigate()
	const path = useLocation().pathname.toLowerCase()
	let lgd = Lgd()

	useEffect(() => {
		// get path & assign document tittle
		let lastP = path.split("/").pop()
		let mItm = mItems.find((i) =>
			i.path.toLowerCase().includes("/" + lastP)
		)
		let pNow =
			mItm?.name !== undefined
				? mItm?.name.toUpperCase()
				: String(lastP).toUpperCase()
		document.title = pNow

		// redir from specific paths if logged in
		const redirP = [ "LOGIN", "REG", "REC", "RES" ]
		let isRedir = redirP.some((i) => i === pNow)
		lgd === "lu" &&
			isRedir &&
			nav("/", {
				replace: true,
				state: null,
			})
	}, [ lgd, nav, path ])
}

export default Path
