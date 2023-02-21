import { UCX } from "../contexts/mainCTX"
import { TpIcart } from "../types/TpCTX"

const Cart = () => {
    const { iCart } = UCX()

    //TODO: group same item, if multiple, & show nr of same type, next to item
    //TODO: possibility to delete items from cart
    //TODO: increase/decrease nr items in cart
    //TODO: show final amount & continue to payment options (create)

    return (
        <>
            {iCart?.map((i: TpIcart, index) => {
                return (
                    <div className="item x c" key={index}>
                        <h3>{i.p_nm}</h3>
                        <img src={i.p_im} alt={i.p_nm} />
                        <p className="y c">${i.p_pr},-$</p>
                    </div>
                )
            })}
        </>
    )
}

export default Cart
