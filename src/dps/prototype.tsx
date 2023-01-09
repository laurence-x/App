const Prototype = () => {
	return (
		<>
			<b>Creational Pattern</b>
			<p className="bl c">construction of objects</p>
			<br />
			<h1 className="y c">Prototype</h1>
			<br />
			<p>Create an object using another object's atributes.</p>
			<br />
			<br />
			<pre>{`
// template object
const Obj = {
    age: 11,
    name() {
        return 'Mike'
    },
}

// create a new bject
const NewObj = Object.create(Obj, { model: { value: 'Single deck' } })
console.log(NewObj.__proto__ === Obj)
// returns true
            `}</pre>
		</>
	)
}

export default Prototype
