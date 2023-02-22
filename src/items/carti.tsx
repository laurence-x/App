import { UCX } from "../contexts/mainCTX"
import { TpIcart } from "../types/TpCTX"

const CartI = () => {
    const { cart, IdeC } = UCX()

    //TODO: increase/decrease nr items in cart
    //TODO: show final amount & continue to payment options (create)

    return (
        <>
            {cart.length < 1 && <p>redir to items...</p>}
            <div>
                {cart.map((i: TpIcart) => (
                    <div className="item x c" key={i.Iid}>
                        <h3>{i.Inm}</h3>
                        <img src={i.Iim} alt={i.Inm} />
                        <p className="y c">
                            {i.Ipr} ({i.Iqt})
                        </p>
                        <input
                            type="button"
                            value="delete"
                            className="m"
                            onMouseUp={IdeC.bind(this, i)}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}

export default CartI
