import { keyUpTeT } from "types/contactT"
import BtnMsg from "../fns/btnMsg"

const KeyupTe = ({ iT, ms, iB }: keyUpTeT) => {
	BtnMsg(ms, iB) // show Btn & hide message

	if (iT.current) {
		let frmNr = (val: string) => {
			// let only number through, remove empty spaces, letters, etc
			let nr1 = val.replace(/[^0-9]+/g, "")
			let nr2 = nr1.replace(/[^\d]/g, "")

			// format number
			let nr = nr2.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")

			//! add here also cc to it

			return nr
		}

		// executing the fn from above
		let nrF = frmNr(iT.current.value)
		iT.current.value = nrF
	}
}

export default KeyupTe
