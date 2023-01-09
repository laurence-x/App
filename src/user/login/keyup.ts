import BtnMsg from "../../fns/btnMsg"

const ku = (
	Em: React.RefObject<HTMLInputElement>,
	Pw: React.RefObject<HTMLInputElement>,
	ms: React.RefObject<HTMLParagraphElement>,
	iB: React.RefObject<HTMLInputElement>,
) => {
	BtnMsg(ms, iB) // show btn, hide message

	// remove empty spaces
	Em.current && (Em.current.value = Em.current.value.replace(/\s/g, ""))
	Pw.current && (Pw.current.value = Pw.current.value.replace(/\s/g, ""))
}

export default ku
