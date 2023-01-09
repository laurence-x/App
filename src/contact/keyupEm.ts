import { keyUpEmT } from "types/contactT"
import BtnMsg from "../fns/btnMsg"

const KeyupEm = ({ iE, iE2, ms, iB }: keyUpEmT) => {
	BtnMsg(ms, iB) // show Btn & hide message

	// remove empty spaces
	iE.current && (iE.current.value = iE.current.value.replace(/\s/g, ""))
	iE2.current && (iE2.current.value = iE2.current.value.replace(/\s/g, ""))
}

export default KeyupEm
