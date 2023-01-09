import { useState } from "react"
import MLinks from "./mLink"

const MSecDp = () => {
	const [ classSecDp, setSecDp ] = useState(false)
	const clickSecDp = () => setSecDp(!classSecDp)

	return (
		<>
			<div
				onMouseUp={clickSecDp}
				className={classSecDp ? "p sBtn open" : "p sBtn"}
			>
				Design Pattern
			</div>
			<div className={classSecDp ? "sMenu show" : "sMenu hide"}>
				<MLinks mType="Dp" />
			</div>
		</>
	)
}

export default MSecDp
