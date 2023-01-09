export default function Observer() {
	return (
		<>
			<b>Behavioral Pattern</b>
			<p className="bl c">interactions between objects</p>
			<br />
			<h1 className="y c">Observer</h1>
			<br />
			<p>
				The useEffect hook is a perfect example for this pattern, it is
				divided in 2 parts, the executable fn & an array of
				dependencies.
			</p>
			<br />
			<br />
			<p>
				If the array is empty, the fn gets executed each time the
				component is renders.
			</p>
			<pre>{`
useEffect(() => { console.log('The component has rendered') }, [])
            `}</pre>
			<br />
			<br />
			<p>
				If there are any vars declared in dependency array, the fn
				executes only when those change.
			</p>
			<pre>{`
useEffect(() => { console.log('var1 has changed') }, [ var ])
            `}</pre>
		</>
	)
}
