import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

/* //~ Use only as a Component in JSX:
	<Redir navData={{
		go: "items/3",
		tm: 10
	}} />
*/

type TpNavD = {
	navData: {
		go: string
		tm: number
	}
}

export default function Redir(props: TpNavD) {
	let navigate = useNavigate()

	const goPath = props.navData.go
	const tm = props.navData.tm * 1000

	useEffect(() => {
		setTimeout(() => {
			navigate("../" + goPath, {
				replace: true,
				state: null,
			})
		}, tm)
	}, [ goPath, navigate, tm ])

	return null
}
