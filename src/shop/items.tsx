import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { TpIcart } from "types/TpCTX"
import { UCX } from "../contexts/mainCTX"
import iList from "./iList"

const Items = () => {
    const { iSrcV, ItoC } = UCX() // get input search value & item to cart
    const [ its, setIts ] = useState(iList) // set items list. default iList.ts
    const nvg = useNavigate()

    useEffect(() => {
        setIts(
            iList.filter((i) =>
                i.Inm?.toLowerCase().includes(iSrcV.toLowerCase())
            )
        )
    }, [ iSrcV ]) // on input search value change, pick matching from items list

    // set items list order, based on the select element option value
    const sortI = (e: { target: { value: string } }) => {
        const s: string = e.target.value
        const sIts = [ ...its ]
        s === "d" && setIts(iList)
        s === "c" && setIts(sIts.sort((a, b) => a.Ipr - b.Ipr))
        s === "e" && setIts(sIts.sort((a, b) => b.Ipr - a.Ipr))
        s === "n" && setIts(sIts.sort((a, b) => a.Inm.localeCompare(b.Inm)))
    }

    return (
        <>
            <select onChange={sortI} className="c m">
                <option value="d">default order...</option>
                <option value="n">order by name</option>
                <option value="c">cheapest first</option>
                <option value="e">expensive first</option>
            </select>
            <br />
            {its.map((i: TpIcart) => (
                <div className="item x c" key={i.Iid}>
                    <h2 className="y c">{i.Inm}</h2>
                    <br />
                    <img src={i.Iim} alt={i.Inm} />
                    <p className="c">${i.Ipr},-</p>
                    <br />
                    <div className="fx m">
                        <input
                            type="button"
                            value="details"
                            className="fc"
                            onMouseUp={() => nvg(`/shop/${i.Iid}`)}
                        />
                        <input
                            type="button"
                            value="to cart"
                            className="fc"
                            onMouseUp={ItoC.bind(this, i)}
                        />
                    </div>
                </div>
            ))}
        </>
    )
}

export default Items
