import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

/* //~ Use only as a Component in JSX:
	<Redir pd={{
		go: "items/3",
		tm: 10
	}} />
*/

type TpNavD = {
	pd: {
		go: string
		tm: number
	}
}

export default function Redir(p: TpNavD) {
	let navigate = useNavigate()

	const goPath = p.pd.go
	const tm = p.pd.tm * 1000

	useEffect(() => {
		const timer = setTimeout(() => {
			navigate("../" + goPath, {
				replace: true,
				state: null,
			})
		}, tm)
		return () => clearTimeout(timer)
	}, [ goPath, navigate, tm ])

	return null
}
