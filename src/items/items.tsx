import { useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { UCX } from "../contexts/mainCTX"
import iList from "./iList"

const Items = () => {
    const { iSrcV, iToCart } = UCX()
    const nvg = useNavigate()

    const selection = useMemo(() => {
        return iList.filter((i) =>
            i.p_nm?.toLowerCase().includes(iSrcV.toLowerCase())
        )
    }, [ iSrcV ])

    return (
        <>
            {selection.map((i) => (
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
