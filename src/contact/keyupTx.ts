import BtnMsg from "../fns/btnMsg"

const KeyupTx = (
	tA: React.RefObject<HTMLTextAreaElement>,
	ms: React.RefObject<HTMLParagraphElement>,
	iB: React.RefObject<HTMLInputElement>
) => {
	BtnMsg(ms, iB) // show Btn & hide message

	if (tA.current) {

		// auto hight
		const oHi = Number(tA.current.offsetHeight)
		const sHi = Number(tA.current.scrollHeight)
		oHi < sHi && (tA.current.style.height = `${sHi}px`)

		const tal = Number(tA.current.value.length)
		const max = Number(tA.current.maxLength)

		// remaining characters //! show remaining chars somewhere... not on btn
		// iB.current &&
		// 	(iB.current.value = `remaining ${max - tal} chars => send`)

		// maximum lenght //! include this on every keyup file
		if (tal === max && ms.current) {
			ms.current.style.display = "block"
			ms.current.style.color = "#f00"
			ms.current.textContent = "maximum lenght reached"
		}

	}

}

export default KeyupTx
