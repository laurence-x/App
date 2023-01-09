export default function Adapter() {
	return (
		<>
			<b>Structural</b>
			<p className="bl c">relation between objects</p>
			<br />
			<h1 className="y c">Adapter</h1>
			<br />
			<p>
				Objects with incompatible interfaces, interact with each other.
			</p>
			<br />
			<pre>{`
const users = [
    { name: "Joe", friends: 2.7 },
    { name: "Mike", friends: 6.1 },
]

const newUser = {
    name: "Steve",
    friends: 5400,
}

// convert the friends nr of the new user with the adapter Fn to same as users
const adapterFn = (name: { name?: string; friends: any }) => {
    name.friends = parseFloat((name.friends / 1000).toFixed(1))
}
adapterFn(newUser)

users.push(newUser) // add the newUser obj, to the users array

const topFriends = () => {
    return Math.max(...users.map((name) => name.friends))
}
console.log(topFriends()) // returns 6.1
            `}</pre>
		</>
	)
}
