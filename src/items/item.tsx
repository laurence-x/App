import { useNavigate, useParams } from "react-router-dom"

import { UCX } from "../contexts/mainCTX"
import { TpIcart } from "../types/contextT"

import iList from "./iList"

export default function Item() {
    const nvg = useNavigate()
    const back = () => nvg(-1)

    const { iToCart } = UCX()

    const paramId = String(useParams().id)
    const iNow = iList.find((iDtl) => iDtl.p_id === paramId)
    const it = iNow as TpIcart

    return (
        <div className="m">
            <br />
            <b>{it.p_nm}</b>
            <br />
            <div className="c">
                <img src={it.p_im} alt={it.p_nm} />
            </div>
            <p className="c">${it.p_pr},-</p>
            <br />
            <input
                type="button"
                value="add to cart"
                className="m"
                onMouseUp={() => iToCart(it)}
            />
            <br />
            <input type="button" value="back" onMouseUp={back} />
        </div>
    )
}
