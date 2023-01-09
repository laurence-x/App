let createEl = (
	cname: number | undefined,
	mel: {
		insertAdjacentElement: (arg0: any, arg1: HTMLScriptElement) => void
	},
	scr: string,
	whr: any
) => {
	// mk=make element
	if (typeof mel === "object") {
		let nscr = document.createElement("script") // nscr=new script
		nscr.setAttribute("type", "text/javascript")
		nscr.setAttribute("src", scr)
		nscr.setAttribute("charset", "utf-8")
		// whr=where: "afterbegin" "afterend" "beforebegin" "beforeend"
		mel.insertAdjacentElement(whr, nscr)
		clearInterval(cname)
	}
}
export default createEl

/* ---------------------------------- USAGE ------------------------------------

const cname = setInterval(()=>{ mk(cname,body,"contact.js?v="+uxt,'beforeend') },2000)
cname=constant name // mel=body element to orientate by and wait for to exist

const uxt = Date.now()
const cname = setInterval(() => {
	const bdy = document.getElementsByTagName('body')[ 0 ]
	if (typeof (bdy) === "object") {
		mk(cname, bdy, "contact.js?v=" + uxt, 'beforeend')
	}
}, 2000)

~ insert js element in head
<head>
	<script>
		const fcs = document.createElement("script")
		fcs.setAttribute("type", "text/javascript")
		fcs.setAttribute("async", "async")
		fcs.setAttribute("src", "../js/fcs.js?v=" + uxt)
		fcs.setAttribute("charset", "utf-8")
		head.insertAdjacentElement("beforeend", fcs)

--------------------------------- REACT.CREATE ---------------------------------

~ method accepts 3 arguments: type, props, children:
1. arg: name of HTML el type
2. arg: props: object with a key-value pair or an array of similar objects
3. arg: children: value a parent component to pass to child

export default function App() {
	return (
		<div className= "App" >
			{ React.createElement("h1", null, "Some text,", " more words") }
		< /div>
	)
}

----------------------------------------------------------------------------- */
