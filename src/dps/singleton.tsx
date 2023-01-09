export default function Singleton() {
	return (
		<>
			<b>Creational Pattern</b>
			<p className="bl c">construction of objects</p>
			<br />
			<h1 className="y c">Singleton</h1>
			<br />
			<p>
				An object that can't be instantiated, copied or modified, more
				than once.
			</p>
			<br />
			<pre>{`
const Config = {
	name: "Mike",
	start: () => console.log("App has started"),
	update: () => console.log("App has updated"),
}

/* freeze the object to prevent new properties being added
and existing properties being modified or removed */
Object.freeze(Config)

Config.start() // "App has started"
Config.update() // "App has updated"

Config.name = "Robert" // We try to add a new key

console.log(Config)
// output: { start: [Function: start], update: [Function: update] }
// no other changes allowed
            `}</pre>
		</>
	)
}
