import React, { useEffect, useMemo, useState } from "react"

const UseMem = () => {
    const [ nr1, setNr1 ] = useState(0)
    const [ nr2, setNr2 ] = useState(0)

    const Fn = (n: number) => {
        n += 1
        return "useMomo Fn executed: " + n
    }

    const res = useMemo(() => Fn(nr2), [ nr2 ])

    useEffect(() => {
        console.log("Changed: ", res)
    }, [ res ])

    const plus1 = () => setNr1((c) => c + 1)
    const plus2 = () => setNr2((c) => c + 1)

    return (
        <>
            <h1 className="g">useMemo</h1>
            <p>
                Used to memoize the result of a Fn and skip rendering, if its
                dependency has not changed.
            </p>
            <br />
            <p className="g">Syntax:</p>
            <pre className="r">{`const res = useMemo(() => fn(n), [d])`}</pre>
            <br />
            <p>
                Each button displays it's own count, while the useMome hook
                count in between them, starts at 1.
            </p>
            <p>
                The useMemo encapsulated Fn result, depends on the second button
                value.
            </p>
            <br />
            <input className="m" type="button" value={nr1} onMouseUp={plus1} />
            <p className="m y c">{res}</p>
            <input className="m" type="button" value={nr2} onMouseUp={plus2} />
            <br />
            <code>
                <pre>{`
const [nr1, setNr1] = useState(0)
const [nr2, setNr2] = useState(0)

const Fn = (n: number) => {
    n += 1
    return "useMomo Fn executed: " + n
}

const res = useMemo(() => Fn(nr2), [nr2])

const plus1 = () => setNr1((c) => c + 1)
const plus2 = () => setNr2((c) => c + 1)

<input type="button" value={nr1} onMouseUp={plus1} />
<p>{res}</p>
<input type="button" value={nr2} onMouseUp={plus2} />
            `}</pre>
            </code>
        </>
    )
}

export default UseMem
