import { useWinSize } from "fns/sizeW"
import { useEffect, useState } from "react"

export default function FoBtn() {
	const [ wW ] = useWinSize() // just get the width size
	const [ fnt, setfnt ] = useState(localStorage.getItem("fnt") || "J")
	const xfnt = () => (fnt === "J" ? setfnt("N") : setfnt("J"))

	useEffect(() => {
		let sz = wW > 1000 ? 10 : 6.8
		document.documentElement.style.setProperty("font-size", `${sz}px`)

		localStorage.setItem("fnt", fnt)
		if (fnt === "J") {
			document.documentElement.style.setProperty("--f", "Jetbrains")
			document.documentElement.style.setProperty("letter-spacing", "0")
		} else {
			document.documentElement.style.setProperty("--f", "Neucha")
			document.documentElement.style.setProperty(
				"letter-spacing",
				"1.4px"
			)
		}
	}, [ wW, fnt ])

	return (
		<div>
			<input
				type="button"
				value="&#x267E;"
				title={fnt === "J" ? "elegant" : "dancing"}
				className={fnt === "N" ? "r" : "y"}
				onMouseUp={xfnt}
			/>
		</div>
	)
}
