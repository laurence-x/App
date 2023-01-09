import React from "react"
import { Outlet } from "react-router-dom"

const LayHks = () => {
    return (
        <>
            <Outlet />
            <br />
            <hr />
            <br />
            <p className="c bl">
                A hook, is a reusable Fn, that can be called only from inside
                the Component at the top, can't be conditional, and doesn't work
                inside class Components or loops.
            </p>
            <br />
        </>
    )
}

export default LayHks
