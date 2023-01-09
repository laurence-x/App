import { useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UCX } from "../contexts/mainCTX"

export default function CartC() {
	const { iCart } = UCX()
	const nvg = useNavigate()
	const [ cIts, setCits ] = useState<number>()
	const [ col, setCol ] = useState("")

	useMemo(() => setCits(iCart?.length), [ iCart ])

	const cart = `url(${require("../assets/images/cart.png")})`
	const toC = () => cIts !== 0 && nvg("/items/cart")

	return (
		<div
			style={
				cIts === 0
					? { color: "#2aa" }
					: {
						color: `${col}`,
						backgroundImage: cart,
						cursor: "pointer",
					}
			}
			onMouseEnter={() => setCol("#fff")}
			onMouseLeave={() => setCol("#2aa")}
			onMouseUp={toC}
			className="mB"
		>
			{cIts !== 0 ? cIts : "Welcome!"}
		</div>
	)
}
