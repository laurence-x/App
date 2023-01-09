import { UCX } from "../contexts/mainCTX"

import MLinks from "./mLink"

import MSecBp from "./mLinkS_Bps"
import MSecDp from "./mLinkS_Dps"
import MSecHk from "./mLinkS_Hks"

export default function Menu() {
    const { expand } = UCX()

    return (
        <div id="menu" className={expand ? "show" : "hide"}>
            <MLinks mType="Mm" />
            <MSecHk />
            <MSecBp />
            <MSecDp />
            <MLinks mType="Bm" />
        </div>
    )
}
