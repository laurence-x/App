const JsxFns = () => {
	return (
		<>
			<h1 className="g">JSX & Functions</h1>
			<br />
			<p>Don't write functions inside JSX elements!</p>
			<br />
			<br />
			<p className="r">bad practice</p>
			<pre>{`
return (
    <>
        <button onClick={() => { logic }}> Click </button>
    </>
)
            `}</pre>
			<br />
			<br />
			<p className="y">good practice</p>
			<pre>{`
const xyz = useSomeHook(() => { logic }, [ dependencies... ])
return (
    <>
        <button onClick={ xyz } > Click </button>
    </>
)
            `}</pre>
		</>
	)
}

export default JsxFns
