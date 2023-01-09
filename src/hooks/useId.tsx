import React, { useId } from "react"

const UseId = () => {
    const id = useId()
    console.log(id)

    return (
        <>
            <h1 className="g">useId</h1>
            <p>
                Use to generate unique id's (:r0:), not compatible with css and
                should not be use as keys.
            </p>
            <br />
            <p className="c">
                click the labels, to focus on the coresponding input
            </p>
            <br />
            <label className="m" htmlFor={"username-" + id}>
                Username
            </label>
            <input id={"username-" + id} type="text" className="m" />
            <br />
            <label className="m" htmlFor={"email-" + id}>
                Email
            </label>
            <input id={"email-" + id} type="text" className="m" />
            <br />
            <label className="m" htmlFor={"password-" + id}>
                Password
            </label>
            <input id={"password-" + id} type="password" className="m" />
            <br />
            <code>
                <pre>{`
const id = useId()

<label htmlFor={"username-" + id}>Username</label>
<input id={"username-" + id} type="text" />

<label htmlFor={"email-" + id}>Email</label>
<input id={"email-" + id} type="text" />

<label htmlFor={"password-" + id}>Password</label>
<input id={"password-" + id} type="password" />
            `}</pre>
            </code>
        </>
    )
}

export default UseId
