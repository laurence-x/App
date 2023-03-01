import { useNavigate, useParams } from "react-router-dom"

import { UCX } from "../contexts/mainCTX"
import { TpIcart } from "../types/TpCTX"

import iList from "./iList"

const Item = () => {
    const nvg = useNavigate()
    const back = () => nvg(-1)

    const { ItoC } = UCX() // get item to cart from context

    const p = String(useParams().id) // get parameter id
    const i = iList.find((iDtl) => iDtl.Iid === p) as TpIcart // get item by id

    return (
        <div className="l">
            <br />
            <b>{i.Inm}</b>
            <br />
            <div className="c">
                <img src={i.Iim} alt={i.Inm} />
            </div>
            <p className="c">${i.Ipr},-</p>
            <br />
            <div className="fx m">
                <input
                    type="button"
                    value="back"
                    className="fc"
                    onMouseUp={back}
                />
                <input
                    type="button"
                    value="to cart"
                    className="fc"
                    onMouseUp={ItoC.bind(this, i)}
                />
            </div>
        </div>
    )
}

export default Item
