import { useNavigate } from "react-router-dom"

export default function Decorator() {
	const nvg = useNavigate()

	const goCx = () => nvg("/hks/useCtx")

	return (
		<>
			<b>Structural</b>
			<p className="bl c">relation between objects</p>
			<br />
			<h1 className="y c">Decorator</h1>
			<br />
			<p>
				Attach new behaviors to objects, by placing them inside wrapper.
			</p>
			<br />
			<br />
			<p>
				A good example for this pattern, would be the useContext
				hook. Check it out by clicking the button below.
			</p>
			<br />
			<br />
			<input
				type="button"
				value="context"
				className="m c"
				onMouseUp={goCx}
			/>
			<br />
		</>
	)
}
