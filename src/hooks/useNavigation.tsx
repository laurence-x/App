import React from "react"
// import { useNavigation } from "react-router-dom"

const UseNvg = () => {
    // const navigation = useNavigation()

    return (
        <>
            <h1 className="g">useNavigation</h1>
            <p>used to build pending navigation indicators</p>
            <code>
                <pre>
                    {`
const navigation = useNavigation()
console.log(navigation)
                `}
                </pre>
            </code>
            <p>return an obj containing: formAction, formData, formEncType, formMethod, location, state</p>
            <br />
            <h3 className="g">The "state" key</h3>
            <code>
                <pre>
                    {`
let navState = navigation.state
console.log(navState)
                `}
                </pre>
            </code>
            <h3>returns:</h3>
            <p className="y">idle</p>
            <p>no navigation pending</p>
            <p className="y">submitting</p>
            <p>action call from a form submission: POST, PUT, PATCH, DELETE</p>
            <p className="y">loading</p>
            <p>loaders for the next routes are being called</p>
            <br />
            <h3>states cicle:</h3>
            <p className="y">GET</p>
            <p>idle → loading → idle</p>
            <p className="y">POST, PUT, PATCH, DELETE</p>
            <p>idle → submitting → loading → idle</p>
            <br />
            <h3>submit button:</h3>
            <code>
                <pre>
                    {`
function SubmitButton() {
    const navigation = useNavigation()
    const text =
        navigation.state === "submitting"
            ? "sending..."
            : navigation.state === "loading"
            ? "sent"
            : "send"
    return <button type="submit">{text}</button>
}
                `}
                </pre>
            </code>
            <br />
            <h3 className="g">The "formData" key</h3>
            <code>
                <pre>
                    {`
let navFD = String(navigation.formData)
console.log(navFD)
                `}
                </pre>
            </code>
            <br />
            <p>at POST, PUT, PATCH, DELETE</p>
            <p>disable forms, add busy indicators submit buttons</p>
            <br />
            <h3 className="g">The "location" key</h3>
            <code>
                <pre>
                    {`
let navLoc = String(navigation.location)
console.log(navLoc)
                `}
                </pre>
            </code>
            <br />
            <p>on a GET the formData is empty</p>
            <code>
                <pre>
                    {`
const y =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("x")
console.log(y)
                `}
                </pre>
            </code>
            <br />
            <h3 className="g">The "formAction" key</h3>
            <code>
                <pre>
                    {`
let navFA = String(navigation.formAction)
console.log(navFA)
                `}
                </pre>
            </code>
            <br />
            <h3 className="g">The "formMethod" key</h3>
            <code>
                <pre>
                    {`
let navFM = navigation.formMethod
console.log(navFM)
                `}
                </pre>
            </code>
        </>
    )
}

export default UseNvg
