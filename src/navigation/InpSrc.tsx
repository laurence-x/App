import { useLocation, useNavigate } from "react-router-dom"
import { UCX } from "../contexts/mainCTX"
import { TpStr } from "../types/Types"

export default function SrcInp() {
    const { iSrcV, setSrcV } = UCX()
    const nvg = useNavigate()
    const pn = useLocation().pathname.toLowerCase()

    const goI = () => {
        // go to home if on any part besides items
        !pn.includes("items") && pn.split("/").pop() && nvg("/")

        // go to items if on any items child paths
        pn.includes("items/") && nvg("/items")
    }

    const sVl = (e: TpStr) => setSrcV(e.target.value)

    return (
        <div>
            <input
                type="search"
                placeholder="search..."
                pattern=".{2,25}"
                minLength={Number(2)}
                maxLength={Number(25)}
                autoComplete="off"
                value={iSrcV}
                onChange={sVl}
                onFocus={goI}
            />
        </div>
    )
}
