import { useCallback, useEffect } from "react"

const CapsOn = () => {
	const cOn = useCallback((e: KeyboardEvent) => {
		e.preventDefault()
		e.getModifierState("CapsLock") && alert("CapsLock is ON")
	}, [])

	useEffect(() => {
		window.addEventListener("keyup", cOn)
		return () => window.removeEventListener("keyup", cOn)
	}, [ cOn ])

	return null
}

export default CapsOn
