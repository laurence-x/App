import { useEffect, useRef, useState } from "react"

const UseRf = () => {
    // Timer
    const [ number, setTimer ] = useState(0)
    const refVal = useRef<number | null>()
    const stopCount = () => {
        if (refVal.current) window.clearInterval(refVal.current)
    }
    useEffect(() => {
        refVal.current = window.setInterval(() => {
            setTimer((number) => number + 1)
        }, 1000)
        return () => stopCount()
    }, [])

    // Focus
    // (null!) non-null assertion: no optional chaining after current?.focus()
    const txtinp = useRef<HTMLInputElement>(null!)
    const focusX = () => {
        txtinp.current.focus()
        txtinp.current.value = "" // reset the text input value
    }

    // Value
    const [ inpVal, setInputValue ] = useState("")
    const iChange = (e: { target: { value: string } }) => {
        setInputValue(e.target.value)
        // stop the count from above
        if (refVal.current) window.clearInterval(refVal.current)
    }
    // target the ref input element: "Object {current: value}"
    const prevInpVal = useRef<string | null>()
    useEffect(() => {
        prevInpVal.current = inpVal
    }, [ inpVal ])

    return (
        <>
            <h1 className="g">useRef</h1>
            <p>Use to store a reference to a value & access the dom directly.</p>
            <br />
            <b className="y">{number}</b>
            <input
                type="button"
                className="m"
                onMouseUp={() => stopCount()}
                value="stop"
            />
            <br />
            <p className="c">click the btn to focus on the input below</p>
            <input type="button" className="m" onMouseUp={focusX} value="btn" />
            <br />
            <p>While typing, gabbing & displaying the actual val.</p>
            <h2 className="y">New/Actual value: {inpVal} </h2>
            <br />
            <input
                type="text"
                className="m"
                ref={txtinp}
                onChange={iChange} // get value while typing
                value={inpVal} // show the actual input value
                placeholder="type..."
                required
            />
            <br />
            <p>Ref Object current val, doesn't change between renders.</p>
            <h2 className="y">Previous value: {prevInpVal.current}</h2>
            <br />
            <code>
                <pre>
                    {`
# Timer
const [number, setTimer] = useState(0)
const refVal = useRef<number | null>()
const stopCount = () => {
    if (refVal.current) window.clearInterval(refVal.current)
}
useEffect(() => {
    refVal.current = window.setInterval(() => {
        setTimer((number) => number + 1)
    }, 1000)
    return () => stopCount()
}, [])
<b>{number}</b>
<input type="button" onMouseUp={() => stopCount()} value="stop" />

# Focus
const txtinp = useRef<HTMLInputElement>(null!)
const focusX = () => {
    txtinp.current.focus()
    txtinp.current.value = "" // reset the text input value
}
<input type="button" onMouseUp={focusX} value="btn" />

# Value
const [inpVal, setInputValue] = useState("")
// get the actual input value while typing
const iChange = (e: { target: { value: string } }) => {
    setInputValue(e.target.value)
    // do more stuff... change color... etc...
    // stop the count from above, so no re-render:
    if (refVal.current) window.clearInterval(refVal.current)
}
// target the ref input element: "Object {current: value}"
const prevInpVal = useRef<string | null>()
useEffect(() => {
    prevInpVal.current = inpVal // refresh the current value on input change
}, [inpVal])
<h2>Actual input value: {inpVal} </h2>
<input
    ref={txtinp}
    onChange={iChange} // get value while typing
    value={inpVal} // show the actual input value
    type="text"
    placeholder="type..."
/>
<h2>Previous input value: {prevInpVal.current}</h2>
            `}
                </pre>
            </code>
        </>
    )
}

export default UseRf
