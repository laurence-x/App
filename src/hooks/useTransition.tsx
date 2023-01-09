export default function UseTrs() {
    return (
        <>
            <h1 className="g">useTransition</h1>
            <p>show a message while getting some data</p>
            <br />
            <code>
                <pre>{`
import { useState, useTransition } from "react"

# Component
const [ getD, getData ] = useState(false)
const [ transition, startTransition ] = useTransition()
const get = () => {
    startTransition(() => {
        getData((prev) => !prev)
    })
}

# JSX
return (
    <>
        {transition && <b className="y">loading...</b>}
        {getD ? (
            <Component />
        ) : (
            <input type="button" onMouseUp={get} value="get" />
        )}
    </>
)
            `}</pre>
            </code>
        </>
    )
}
