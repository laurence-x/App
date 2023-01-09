import { useCallback, useEffect } from "react"
import { UCX } from "../contexts/mainCTX"

export default function EventMouseUp() {
	const { setSrcV, expandMenu } = UCX()

	const mouseUp = useCallback(
		(e: MouseEvent) => {
			e.preventDefault()
			let el = e.target as HTMLElement

			// if click not on menu or section btn: contract main menu
			el.id !== "mBtn" &&
				!el.classList.contains("sBtn") &&
				expandMenu(false)

			// on menu btn click: empty search input
			el.classList.contains("mB") && setSrcV("")
		},
		[ expandMenu, setSrcV ]
	)

	useEffect(() => {
		window.addEventListener("mouseup", mouseUp)
		return () => window.removeEventListener("mouseup", mouseUp)
	}, [ mouseUp ])

	return null
}
