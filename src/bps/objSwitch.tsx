export default function ObjSwitch() {
	return (
		<>
			<h1 className="g">Object map vs Switch</h1>
			<p>
				Use object map instead of Switch statement
			</p>
			<br />
			<p className="r">bad practice</p>
			<pre>{`
switch (props.type) {
	case "Aaaa":
		return <Bbbb />;
	case "Xxxx":
		return <Yyyy />;
	default:
		return <Page />;
}
            `}</pre>
			<br />
			<p className="y">good practice</p>
			<pre>{`
const MyMap = {
	Aaaa: Bbbb,
	Xxxx: Yyyy,
	Default: Page,
}
const MyComp = MyMap[ props.type ]
            `}</pre>
			<br />
			<p className="g">better practice</p>
			<pre>{`
const MyMap = {
	Aaaa: React.lazy(() => import("../components/Bbbb")),
	Xxxx: React.lazy(() => import("../components/Yyyy")),
	Default: React.lazy(() => import("../components/Page")),
}
const MyComp = MyMap[ props.type ]
            `}</pre>
		</>
	)
}
