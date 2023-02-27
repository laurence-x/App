import { Outlet } from "react-router-dom"

const LayBps = () => {
    return (
        <>
            <Outlet />
            <br />
            <hr />
            <br />
            <p className="c bl">
                Best practices are meant to improve code quality!
            </p>
            <br />
        </>
    )
}

export default LayBps
