import { useNavigate } from "react-router-dom"

import { UCX } from "../contexts/mainCTX"
import cookieDel from "../fns/cookieDel"

export default function LgBtn() {
    const nav = useNavigate()
    const { usr } = UCX()

    const lgOut = () => {
        //~ cookies to keep after log out:
        cookieDel([ "vic", "t", "q", "esd", "cc" ])
        nav("/")
    }

    const lgIn = () => nav("/login")

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
