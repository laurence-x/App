import {
    createContext,
    useContext,
    useEffect,
    useReducer,
    useState,
} from "react"

import { iAdd, iDel, reducer } from "../items/reducer"
import { TpCxProv, TpCxUsr, TpCxVals, TpIcart } from "../types/TpCTX"

const CCX = createContext({} as TpCxVals)
export const UCX = () => useContext(CCX)

const CxProv = ({ children }: TpCxProv) => {
    const [ expand, expandMenu ] = useState(false)
    const [ usr, setUsr ] = useState<TpCxUsr | null>(null)

    const [ iSrcV, setSrcV ] = useState("") // top input search value

    const CartS = JSON.parse(String(localStorage.getItem("cIts")))
    const [ iC, setC ] = useState(CartS || [])

    const [ cStt, dsp ] = useReducer(reducer, { cart: iC })
    const addC = (i: TpIcart) => dsp({ type: iAdd, it: i })
    const delC = (i: TpIcart) => dsp({ type: iDel, it: i })

    // on cart state change, set items for cart context & local storage
    useEffect(() => {
        // modify only if cart state from useReducer is not empty
        if (cStt.cart.length > 0) {
            localStorage.setItem("cIts", JSON.stringify(cStt.cart))
            setC(cStt.cart)
        }
    }, [ cStt ])

    const CxVals: TpCxVals = {
        usr,
        setUsr,
        expand,
        expandMenu,
        iSrcV,
        setSrcV,
        cart: iC,
        ItoC: addC,
        IdeC: delC,
    }

    return <CCX.Provider value={CxVals}>{children}</CCX.Provider>
}

export default CxProv
