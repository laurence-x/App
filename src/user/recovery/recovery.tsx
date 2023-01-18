import { useRef } from "react"
import { useNavigate } from "react-router-dom"

import CapsOn from "../../fns/capsOn"
import checks from "./checks"
import ku from "./keyup"

export default function Recovery() {
	const Em = useRef<HTMLInputElement>(null!)
	const Em2 = useRef<HTMLInputElement>(null!)
	const ms = useRef<HTMLParagraphElement>(null!)
	const iB = useRef<HTMLInputElement>(null!)
	const rD = useRef<HTMLDivElement>(null!)
	const nvg = useNavigate()

	const kup = () => ku(Em, ms, iB)
	const btn = () => checks({ Em, Em2, ms, iB, rD, nvg })

	return (
		<>
			<CapsOn />
			<b className="h">Recovery</b>
			<div className="l c" ref={rD}>
				<input
					type="email"
					name="email"
					ref={Em}
					onKeyUp={kup}
					placeholder="type your email..."
					title="type your email"
					pattern=".{5,40}"
					minLength={Number(5)}
					maxLength={Number(40)}
					autoComplete="off"
					required
				/>
				<br />
				<input
					type="email"
					ref={Em2}
					onKeyUp={kup}
					placeholder="re-type your email..."
					title="type your email"
					pattern=".{5,40}"
					minLength={Number(5)}
					maxLength={Number(40)}
					autoComplete="off"
					required
				/>
				<br />
				<b ref={ms} className="hide c r"></b>
				<input type="button" ref={iB} value="check" onMouseUp={btn} />
			</div>
		</>
	)
}
