import { useEffect, useState } from "react"

let UseEff = () => {
    const [ amountA, setAmountA ] = useState(0)
    const addA = () => {
        setAmountA((n) => n + 1)
    }
    const [ amountB, setAmountB ] = useState(0)
    const addB = () => {
        setAmountB((n) => n + 1)
    }

    const [ count, setCount ] = useState(0)
    useEffect(() => {
        // let timer = window.setInterval(() => {
        let timer = setTimeout(() => {
            setCount((count) => count + 1)
        }, 500)
        console.log("executed useEffect")
        return () => clearTimeout(timer) // cleanup fn to reduce memory usage
        // return () => window.clearInterval(timer)
    }, [ amountB ]) // Runs on every dependency change
    // }) // No dependency: runs on every app rendering
    // []) // Runs only once, at mounting of the component
    // }, [prop, state]) // multiple dependencies: dependency arr

    return (
        <>
            <h1 className="g">useEffect</h1>
            <p>Used to execute a fn, on mounting or dependency change.</p>
            <br />
            <p>
                Here we heve a useEffect hook (auto-executed once at mounting),
                set with the result of the second click count as it's dependency
                arr. This results in executing the hook only after clicking the
                second button below.
            </p>
            <br />
            <input
                className="m"
                type="button"
                onMouseUp={addA}
                value={`clicked: ${amountA}`}
            />
            <p className="c y">useEffect executed {count} times</p>
            <input
                className="m"
                type="button"
                onMouseUp={addB}
                value={`clicked: ${amountB}`}
            />
            <br />
            <code>
                <pre>{`
const [amountA, setAmountA] = useState(0)
const addA = () => {
    setAmountA((n) => n + 1)
}
const [amountB, setAmountB] = useState(0)
const addB = () => {
    setAmountB((n) => n + 1)
}

const [count, setCount] = useState(0)
useEffect(() => {
    // let timer = window.setInterval(() => {
    let timer = setTimeout(() => {
        setCount((count) => count + 1)
    }, 500)
    console.log("executed useEffect")
    return () => clearTimeout(timer) // cleanup fn to reduce memory usage
    // return () => window.clearInterval(timer)
}, [amountB]) // Runs on every dependency change
// }) // No dependency: runs on every app rendering
// []) // Runs only once, at mounting of the component
// }, [prop, state]) // multiple dependencies: dependency arr

<p>useEffect executed {count} times</p>
<input
    type="button"
    onMouseUp={addA}
    value={'clicked: ${amountA}'}
/>
<input
    type="button"
    onMouseUp={addB}
    value={'clicked: ${amountB}'}
/>
`}</pre>
            </code>
            <br />
            <p>
                A more practical example would be to implement a "Scroll to Top"
                function into a useEffect hook, with the pathname as dependency.
            </p>
            <code>
                <pre>
                    {`
export default function ScrollUp() {
    const { pathname } = useLocation()
    useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }, [pathname])
    return null
}
                `}
                </pre>
            </code>
        </>
    )
}
export default UseEff
