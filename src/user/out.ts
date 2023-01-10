import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import { UCX } from "contexts/mainCTX"
import cookieDel from "../fns/cookieDel"

const AutoOut = () => {
    const { pathname } = useLocation()
    const { setUsr } = UCX()

    useEffect(() => {
        // auto log-out after 15 minutes of inactivity
        const timer = setTimeout(() => {
            // delete all cookies, except:
            cookieDel([ "vic", "t", "q", "esd", "cc" ])
            setUsr({ nm: false, st: false })
        }, 15 * 60 * 1000)

        return () => clearTimeout(timer)
    }, [pathname, setUsr])

    return null
}

export default AutoOut
