export default function Factorial() {
	return (
		<>
			<b>Creational Pattern</b>
			<p className="bl c">construction of objects</p>
			<br />
			<h1 className="y c">Factorial</h1>
			<br />
			<p>
				Used to return different instances of an obj, in order to create
				different objects that share properties.
			</p>
			<br />
			<p className="g">Pros</p>
			<p>
				Separatesthe obj creation from its implementation. Enables to
				createing different instances based on conditions.
			</p>
			<br />
			<p className="r">Cons</p>
			<p>
				Depending on the complexity, it can be difficult to test,
				because of the level of abstraction it introduces.
			</p>
			<br />
			<br />
			<p>Basic example</p>
			<pre>{`
function FnName(type) {
    switch (type) {
        case 'aaa':
            return new xxx()
        case 'bbb':
            return new yyy()
        default:
            throw new Error('zzz')
    }
}
            `}</pre>
		</>
	)
}
