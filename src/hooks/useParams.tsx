import { useParams } from "react-router-dom"

export default function UsePrm() {
    //~ is whatever is set after the main path slash mainpath/:abc
    const urlPrm = useParams().usePrm // routes set to path: ":usePrm"
    console.log("Page: ", urlPrm)
    return (
        <>
            <h1 className="g">useParams</h1>
            <p>Use to get the url params set in the route path.</p>
            <br />
            <p>1. Set the child Route to</p>
            <p className="y">path: ":xxx"</p>
            <p>or multiple path entries possible</p>
            <p className="y">path: ":xxx/:yyy"</p>
            <br />
            <p>2. Create the link to the child</p>
            <p className="y">to="/parent/xxx"</p>
            <p>to call multiple path entries:</p>
            <p className="y">/ParentPath/xxx/yyy</p>
            <p>or directly in the url bar:</p>
            <p className="y">/ParentPath/xxx</p>
            <br />
            <p>3. Access the param on the child route</p>
            <p className="y">let x = useParams().xxx</p>
            <p className="y">console.log("Page: ", x)</p>
            <br />
            <code>
                <pre>{`
const urlPrm = useParams().usePrm
console.log("Params: ", urlPrm) // check the log
            `}</pre>
            </code>
        </>
    )
}
