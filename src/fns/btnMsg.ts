const BtnMsg = (
	ms: React.RefObject<HTMLParagraphElement>,
	iB: React.RefObject<HTMLInputElement>
) => {

	// show button again
	iB.current?.style.visibility === "hidden" &&
		(iB.current.style.visibility = "visible")

	// hide alert message
	ms.current?.style.display === "block" &&
		(ms.current.style.display = "none")

}

export default BtnMsg
