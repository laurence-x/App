import { lazy, useState } from "react"

const TextReturnFn = lazy(() =>
    import("../fns/textreturn").then(module => {
        return { default: module.TextReturn }
    })
)

export default function CodeSplit() {
    const [ nr, setnr ] = useState<number>()
    const impFn = () => {
        import("../fns/getinteger.js").then((module) => {
            setnr(module.GetInteger("10.33"))
            console.log("Fn imported & executed")
        })
    }

    return (
        <>
            <h1 className="g">Code splitting</h1>
            <p>
                used to import a fn only when needed, in order to speed up loading
            </p>
            <br />
            <p className="r">check the dev tools (sources tab), to observe when the files get imported</p>
            <br />
            <h2>Component import</h2>
            <p>the Comp gets loaded with help of the react lazy fn, while a loading message is displayed with help of the Suspense component</p>
            <code>
                <pre>{`
const Page = lazy(() => import("./app"))

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <Suspense fallback={<p>loading...</p>}>
        <RouterProvider
            router={createBrowserRouter([
                {
                    path: "/",
                    element: <Page />,
                    children: Routes,
                },
            ])}
        />
    </Suspense>
)
            `}</pre>
            </code>
            <br />
            <h2>Named Fn import</h2>
            <br />
            <TextReturnFn />
            <code>
                <pre>{`
const TextReturnFn = lazy(() =>
    import("../fns/textreturn").then(module => {
        return { default: module.TextReturn }
    })
)
#JSX
<TextReturnFn />
            `}</pre>
            </code>
            <br />
            <h2>Conditional import</h2>
            <p>lazy import a Fn/Comp only if certain conditions are met</p>
            <br />
            <code>
                <pre>{`
<Suspense fallback={<p>loading...</p>}>
    {user ? <FnComp  /> : <p>text...</p>}
</Suspense>
            `}</pre>
            </code>
            <br />
            <h2>onMouseUp import</h2>
            <br />
            <p>click to import, execute, display & log the res</p>
            <p className="y c">{nr}</p>
            <input type="button" className="m" value="click" onMouseUp={impFn} />
            <br />
            <code>
                <pre>{`
const [ nr, setnr ] = useState<number>()
const impFn = () => {
    import("../fns/getinteger.js").then((module) => {
        setnr(module.GetInteger("10.33"))
        console.log("Fn imported & executed")
    })
}
#JSX
<p>{nr}</p>
<input type="button" value="click" onMouseUp={impFn} />
            `}</pre>
            </code>
            <br />
            <p>
                it is considered also best practice, to execute a fn separately,
                the way impFn is done at onMouseUp
            </p>
        </>
    )
}
