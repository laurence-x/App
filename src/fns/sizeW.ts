import { useCallback, useLayoutEffect, useState } from "react"

export const useWinSize = (): number[] => {
	const [ winS, setSize ] = useState([ 0, 0 ])

	const updateSizes = useCallback(() => {
		setSize([ window.innerWidth, window.innerHeight ])
	}, [])

	useLayoutEffect(() => {
		updateSizes()
		window.addEventListener("resize", updateSizes)
		return () => window.removeEventListener("resize", updateSizes)
	}, [ updateSizes ])

	return [ winS[ 0 ], winS[ 1 ] ]
}

/*
const [ wW, wH ] = useWinSize()
const [ wW ] = useWinSize()
*/
