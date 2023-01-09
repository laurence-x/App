import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import cookieDel from "../fns/cookieDel"

const AutoOut = () => {
    const nvg = useNavigate()
    const { pathname } = useLocation()

    useEffect(() => {
        // auto log-out after 15 minutes of inactivity
        const timer = setTimeout(() => {
            // delete all cockies, except:
            cookieDel([ "vic", "t", "q", "esd", "cc" ])
            nvg("/")
        }, 15 * 60 * 1000)

        return () => clearTimeout(timer)
    }, [ pathname, nvg ])

    return null
}

export default AutoOut
