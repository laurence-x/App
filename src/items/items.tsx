import { useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"

import { UCX } from "../contexts/mainCTX"
import iList from "./iList"

const Items = () => {
    const { iSrcV, iToCart } = UCX()
    const [ its, setIts ] = useState(iList)
    const nvg = useNavigate()

    useMemo(() => {
        setIts(
            iList.filter((i) =>
                i.p_nm?.toLowerCase().includes(iSrcV.toLowerCase())
            )
        )
    }, [ iSrcV ])

    const sortI = (e: { target: { value: string } }) => {
        const s: string = e.target.value
        const sIts = [ ...its ]
        s === "d" && setIts(iList)
        s === "c" && setIts(sIts.sort((a, b) => a.p_pr - b.p_pr))
        s === "e" && setIts(sIts.sort((a, b) => b.p_pr - a.p_pr))
        s === "n" && setIts(sIts.sort((a, b) => a.p_nm.localeCompare(b.p_nm)))
    }

    return (
        <>
            <select onChange={sortI} className="c m">
                <option value="d">default</option>
                <option value="n">by name</option>
                <option value="c">cheapest</option>
                <option value="e">expensive</option>
            </select>
            <br />
            {its.map((i) => (
                <div className="item x c" key={i.p_id}>
                    <h2 className="y c">{i.p_nm}</h2>
                    <br />
                    <img src={i.p_im} alt={i.p_nm} />
                    <p className="c">${i.p_pr},-</p>
                    <br />
                    <input
                        type="button"
                        value="details"
                        className="m"
                        onMouseUp={() => nvg(`/items/${i.p_id}`)}
                    />
                    <br />
                    <input
                        type="button"
                        value="add to cart"
                        className="m"
                        onMouseUp={() => iToCart(i)}
                    />
                </div>
            ))}
        </>
    )
}

export default Items
