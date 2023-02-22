import { useNavigate } from "react-router-dom"
import { UCX } from "../contexts/mainCTX"
import { TpIcart } from "../types/TpCTX"

const CartI = () => {
    const nvg = useNavigate()
    const { cart, ItoC, IdeC } = UCX()

    return (
        <>
            {cart.length < 1
                ? nvg(`/items`)
                : cart.map((i: TpIcart) => (
                    <div className="item x c" key={i.Iid}>
                        <h3>{i.Inm}</h3>
                        <img src={i.Iim} alt={i.Inm} />
                        <p className="y c">
                            {i.Ipr} ({i.Iqt})
                        </p>
                        <input
                            type="button"
                            value="increase"
                            className="m"
                            onMouseUp={ItoC.bind(this, i)}
                        />
                        <input
                            type="button"
                            value="decrease"
                            className="m"
                            onMouseUp={IdeC.bind(this, i)}
                        />
                    </div>
                ))}
        </>
    )
}

export default CartI
