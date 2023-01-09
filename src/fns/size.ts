export { }
/*
const sizes = () => {
	// generate body & form sizes

	//const bdy = document.body
	const bdy = document.getElementsByTagName("body")[ 0 ]

	//let bh = document.body.offsetHeight // get body height
	let bh = bdy.offsetHeight // get body height

	let bah = window.innerHeight // get available browser height
	let baw = window.innerWidth // get available browser width

	// set body height same as browser available height
	bh < bah ? (bdy.style.height = bah + "px") : ""

	const nav = document.getElementsByTagName("nav")[ 0 ]
	const sform = document.getElementsByTagName("form")[ 0 ]

	sform.style.setProperty("text-align", "center")
	let nw = nav.offsetWidth // get nav with
	// set form standard width
	baw < 680
		? (sform.style.width = nw + "px")
		: (sform.style.width = "96%")

	let fh = sform.offsetHeight // get form height
	// show scrolling on Mobile if form higher than avail browser height
	if (fh > bah - 180) {
		sform.style.display = "block"
		sform.style.position = "relative"
		sform.style.margin = "0 auto"
		sform.style.padding = "12px 0"
		sform.style.removeProperty("top")
		sform.style.removeProperty("left")
		sform.style.removeProperty("-moz-transform")
		sform.style.removeProperty("-webkit-transform")
		sform.style.removeProperty("-o-transform")
		sform.style.removeProperty("-ms-transform")
	} else {
		// center form if on Desktop
		sform.style.display = ""
		sform.style.position = "absolute"
		sform.style.margin = "0 auto"
		sform.style.padding = "0"
		sform.style.setProperty("top", "50%")
		sform.style.setProperty("left", "50%")
		sform.style.setProperty(
			"-moz-transform",
			"translate(-50%, -50%)"
		)
		sform.style.setProperty(
			"-webkit-transform",
			"translate(-50%, -50%)"
		)
		sform.style.setProperty("-o-transform", "translate(-50%, -50%)")
		sform.style.setProperty(
			"-ms-transform",
			"translate(-50%, -50%)"
		)
	}
}

sizes() // set body & form sizes
window.addEventListener("resize", sizes, false)
*/
