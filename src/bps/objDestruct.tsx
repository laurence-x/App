const ObjDestruct = () => {
	return (
		<>
			<h1 className="g">Object destructuring</h1>
			<br />
			<p>
				Use object destructuring, instead of, passing multiple props by
				name to a component.
			</p>
			<br />
			<br />
			<p className="r">bad practice</p>
			<pre>{`
return (
    <>
        <Comp name={ Joe } age={ 11 } hair={ braun } />
    </>
)
            `}</pre>
			<br />
			<br />
			<p className="y">good practice</p>
			<pre>{`
const { name, age, hair } = props
return (
    <>
        <Comp { ...props } />
    </>
)
            `}</pre>
		</>
	)
}

export default ObjDestruct
