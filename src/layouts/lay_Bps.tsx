import React from "react"
import { Outlet } from "react-router-dom"

const LayBps = () => {
    return (
        <>
            <Outlet />
            <br />
            <hr />
            <br />
            <p className="c bl">
                Best practices are meant to imporve code quality!
            </p>
            <br />
        </>
    )
}

export default LayBps
