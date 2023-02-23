import { useEffect, useMemo, useState } from "react"
import { UCX } from "../contexts/mainCTX"
import { TpIcart } from "../types/TpCTX"

const CartI = () => {
    const cnow = JSON.parse(String(localStorage.getItem("crncy")))
    const [ cur, setCur ] = useState<string>(cnow || "USD") // set currency
    const [ exR, setExR ] = useState<number>(1) // set exchange rate
    const [ tp, setTp ] = useState<number>() // set total price
    const { cart, ItoC, IdeC } = UCX() // get values from useContext

    useMemo(() => {
        localStorage.setItem("crncy", JSON.stringify(cur))
        fetch("https://open.er-api.com/v6/latest/USD")
            .then((res) => res.json())
            .then((res) => setExR(Number(res.rates[ cur ])))
            .catch((err) => {
                setExR(1) // for safety in case api fails
                console.error(`Error: ${err}`)
            })
    }, [ cur ]) // get & set exchange rate if different currency selected

    useEffect(() => {
        setTp(
            cart.reduce((c: number, i: { iCt: number; Ipr: number }) => {
                let Nr = c + i.iCt * i.Ipr * exR
                return Number(Nr.toFixed(2))
            }, 0)
        )
    }, [ cart, exR ]) // set total price if cart count or exchange rate changes

    // on select element change set currency from it's option value
    const curS = (e: { target: { value: string } }) => setCur(e.target.value)

    // if total prince is 0, set the c items object in storage to an empty array
    tp === 0 && localStorage.setItem("cIts", JSON.stringify([]))

    return (
        <>
            {tp === 0 ? (
                <b className="r">Your cart is empty!</b>
            ) : (
                <div>
                    <div className="c m">{`Total: ${tp} ${cur}`}</div>
                    <select onChange={curS} className="c m">
                        <option value={cur}>choose currency...</option>
                        <option value="USD">US Dollar</option>
                        <option value="EUR">Euro</option>
                        <option value="GBP">Pound Sterling</option>
                    </select>
                    <br />
                    {cart.map(
                        (i: TpIcart) =>
                            Number(i.iCt) > 0 && (
                                <div className="item x c" key={i.Iid}>
                                    <h3>{i.Inm}</h3>
                                    <img src={i.Iim} alt={i.Inm} />
                                    <p className="y c">
                                        {`Price: $${i.Ipr} x Amount: ${i.iCt}`}
                                    </p>
                                    <p className="g c">
                                        Total item:
                                        {` ${(
                                            exR *
                                            i.Ipr *
                                            Number(i.iCt)
                                        ).toFixed(2)} ${cur}`}
                                    </p>
                                    <div>
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
                                </div>
                            )
                    )}
                </div>
            )}
        </>
    )
}

export default CartI
