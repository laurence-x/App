import { useLocation, useNavigate } from "react-router-dom"
import { UCX } from "../contexts/mainCTX"
import { TpStr } from "../types/Types"

export default function SrcInp() {
    const { iSrcV, setSrcV } = UCX()
    const nvg = useNavigate()
    const pn = useLocation().pathname.toLowerCase()

    const goI = () => {
        // go to home if on any path besides shop
        !pn.includes("shop") && pn.split("/").pop() && nvg("/")

        // go to shop if on any shop child paths
        pn.includes("shop/") && nvg("/shop")
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
