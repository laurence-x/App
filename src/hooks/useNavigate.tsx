import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const UseNvt = () => {
    const nvg = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => {
            nvg("/")
        }, 300000)
        return () => clearTimeout(timer)
    }, [ nvg ])

    const back = () => nvg(-1) // on step back in the history stack

    const goto = () =>
        nvg("/hks/useLoc?nm=Mike&ag=24#abc", {
            // true: on back click, this page won't be in history anymore
            replace: false,
            // pass to the next route, an object containing parameter
            // state key is accessible with the useLocation hook on next page
            state: { xxx: "yyy", zzz: 22 },
            // state: { ex: props.page }, // pass to next route
        })

    return (
        <>
            <h1 className="g">useNavigate</h1>
            <p>
                Used to navigate the history stack or pass data to the next
                route.
            </p>
            <br />
            <p className="c">go one step back in the nav history</p>
            <input className="m" type="button" value="back" onMouseUp={back} />
            <br />
            <p className="c">
                open the console & see useLocation's object param "state" log
            </p>
            <input className="m" type="button" value="goto" onMouseUp={goto} />
            <br />
            <code>
                <pre>{`
const nvg = useNavigate()

const back = () => nvg(-1) // one step back in the history stack
<input type="button" value="back" onMouseUp={back} />

const goto = () =>
    nvg("/hks/useLoc?nm=Mike&ag=24#abc", {
        // replace the current history stack entry with this one
        replace: true,
        // pass to the next route, an object containing parameter
        state: { xxx: "yyy", zzz: 22 },
    })
<input type="button" value="goto" onMouseUp={goto} />

# Route element implementation:
element={
    props.xxx ? (
        <Component />
    ) : (
        <Navigate replace to="/yyy" />
    )
}
            `}</pre>
            </code>
        </>
    )
}

export default UseNvt
