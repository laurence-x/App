import { useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UCX } from "../contexts/mainCTX"

export default function CartC() {
	const { cart } = UCX()
	const nvg = useNavigate()
	const [ cIts, setCits ] = useState<number>()
	const [ col, setCol ] = useState("")

	useMemo(
		() =>
			setCits(
				cart.reduce((count: any, curItem: { Iqt: any }) => {
					return count + curItem.Iqt
				}, 0)
			),
		[ cart ]
	)

	const cartL = `url(${require("../assets/images/cart.png")})`
	const toC = () => cIts !== 0 && nvg("/items/carti")

	return (
		<div
			style={
				cIts === 0
					? { color: "#2aa" }
					: {
						color: `${col}`,
						backgroundImage: cartL,
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
