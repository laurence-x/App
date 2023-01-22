import { createContext, useContext, useEffect, useState } from "react"
import { TpCxProv, TpCxUsr, TpCxVals, TpIcart } from "../types/TpCTX"

export const CCX = createContext({} as TpCxVals)
export const UCX = () => useContext(CCX)

const CxProv = ({ children }: TpCxProv) => {
    const [ expand, expandMenu ] = useState(false)
    const [ usr, setUsr ] = useState<TpCxUsr | null>(null)

    const [ iSrcV, setSrcV ] = useState("") // top input search value

    // cart items: get, set, save
    const Cart = JSON.parse(String(localStorage.getItem("CartIts")))
    const [ iCart, setiCart ] = useState<TpIcart[]>(Cart || [])
    useEffect(() => {
        localStorage.setItem("CartIts", JSON.stringify(iCart))
    }, [ iCart ])
    const iToCart = (itm: TpIcart) => setiCart((i) => [ ...i, itm ])

    const CxVals: TpCxVals = {
        usr,
        setUsr,
        expand,
        expandMenu,
        iSrcV,
        setSrcV,
        iToCart,
        iCart,
        setiCart,
    }

    return <CCX.Provider value={CxVals}>{children}</CCX.Provider>
}

export default CxProv
