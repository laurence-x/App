import {
    createContext,
    useContext,
    // useEffect,
    useReducer,
    useState,
} from "react"

import { iAdd, iDel, shopReducer } from "../items/reducer"
import { TpCxProv, TpCxUsr, TpCxVals, TpIcart } from "../types/TpCTX"

const CCX = createContext({} as TpCxVals)
export const UCX = () => useContext(CCX)

const CxProv = ({ children }: TpCxProv) => {
    const [ expand, expandMenu ] = useState(false)
    const [ usr, setUsr ] = useState<TpCxUsr | null>(null)

    const [ iSrcV, setSrcV ] = useState("") // top input search value

    // const CartS = JSON.parse(String(localStorage.getItem("CartIts")))
    // const [ iCart, setiCart ] = useState<TpIcart[]>(CartS || [])
    // useEffect(() => {
    //     localStorage.setItem("CartIts", JSON.stringify(iCart))
    // }, [ iCart ])
    // const iToCart = (itm: TpIcart) => setiCart((i) => [ ...i, itm ])

    const [ cartState, dispatch ] = useReducer(shopReducer, { cart: [] })
    const addC = (i: TpIcart) => { dispatch({ type: iAdd, it: i }) }
    const delC = (i: TpIcart) => { dispatch({ type: iDel, it: i }) }

    const CxVals: TpCxVals = {
        usr,
        setUsr,
        expand,
        expandMenu,
        iSrcV,
        setSrcV,
        // iCart,
        // setiCart,
        cart: cartState.cart,
        ItoC: addC,
        IdeC: delC,
    }

    return <CCX.Provider value={CxVals}>{children}</CCX.Provider>
}

export default CxProv
