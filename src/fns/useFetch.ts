import { useEffect, useState } from "react"

const useFetch = (u: string, m: string, b: BodyInit | null | undefined) => {
	const [ d, setD ] = useState<Response>()
	const [ e, setE ] = useState()
	const [ l, setL ] = useState(false)

	useEffect(() => {
		const controller = new AbortController()
		setL(true)

		fetch(u, {
			method: m,
			body: b,
			signal: controller.signal,
		})
			.then(setD)
			.catch(setE)
			.finally(() => setL(false))

		return () => controller.abort()
	}, [ u, m, b ])

	console.log("D: ", d)
	console.log("E: ", e)
	console.log("L: ", l)

	return [ d, e, l ]
}

export default useFetch
