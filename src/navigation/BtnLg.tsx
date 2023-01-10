import { useNavigate } from "react-router-dom"

import { UCX } from "../contexts/mainCTX"
import cookieDel from "../fns/cookieDel"

const LgBtn = () => {
    const nvg = useNavigate()
    const { usr, setUsr } = UCX()

    const lgOut = () => {
        //~ cookies to keep after log out:
        cookieDel([ "vic", "t", "q", "esd", "cc" ])
        const timer = setTimeout(() => {
            setUsr({ nm: false, st: false })
            nvg("/")
        }, 800)
        return () => clearTimeout(timer)
    }

    const lgIn = () => nvg("/login")

    return (
        <div>
            <input
                type="button"
                className="mB"
                value={usr?.st ? "\u27B2" : "\u2687"}
                title={usr?.st ? "logout" : "login"}
                onMouseUp={usr?.st ? lgOut : lgIn}
            />
        </div>
    )
}

export default LgBtn
