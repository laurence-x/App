import { useEffect, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UCX } from "../contexts/mainCTX"
import { TpIcart } from "../types/TpCTX"

const CartI = () => {
    const cnow = JSON.parse(String(localStorage.getItem("crncy")))
    const [ cur, setCur ] = useState<string>(cnow || "USD")
    const [ exR, setExR ] = useState<number>(1)
    const [ tp, setTp ] = useState<number>()
    const { cart, ItoC, IdeC } = UCX()
    const nvg = useNavigate()

    useMemo(() => {
        localStorage.setItem("crncy", JSON.stringify(cur))
        fetch("https://open.er-api.com/v6/latest/USD")
            .then((res) => res.json())
            .then((res) => setExR(Number(res.rates[ cur ])))
            .catch((err) => console.error(`Error: ${err}`))
    }, [ cur ])

    useEffect(() => {
        setTp(
            cart.reduce((c: any, i: { Iqt: any; Ipr: any }) => {
                let Nr = c + i.Iqt * i.Ipr * exR
                return Number(Nr.toFixed(2))
            }, 0)
        )
    }, [ cart, exR ])

    const curS = (e: { target: { value: string } }) => setCur(e.target.value)

    console.log(`XXX: ${cart.length}`)

    return (
        <>
            <div className="c m">{`Total: ${tp} ${cur}`}</div>
            <select onChange={curS} className="c m">
                <option value={cur}>choose currency...</option>
                <option value="USD">US Dollar</option>
                <option value="EUR">Euro</option>
                <option value="GBP">Pound Sterling</option>
            </select>
            <br />
            {cart.map((i: TpIcart) => (
                <div className="item x c" key={i.Iid}>
                    <h3>{i.Inm}</h3>
                    <img src={i.Iim} alt={i.Inm} />
                    <p className="y c">
                        Price: {i.Ipr} x Amount: {i.Iqt}
                    </p>
                    <p className="g c">
                        Total item: {(i.Ipr * Number(i.Iqt)).toFixed(2)} {cur}
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
            ))}
            {Number(tp) === 0 && nvg(`/items`)}
        </>
    )
}

export default CartI
