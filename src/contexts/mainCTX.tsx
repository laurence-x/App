import {
    createContext,
    useContext,
    useEffect,
    useReducer,
    useState,
} from "react"

import { reducer } from "../items/reducer"
import { TpCxProv, TpCxUsr, TpCxVals, TpIcart } from "../types/TpCTX" // types

const CCX = createContext({} as TpCxVals)
export const UCX = () => useContext(CCX)

const CxProv = ({ children }: TpCxProv) => {
    const [ expand, expandMenu ] = useState(false)
    const [ usr, setUsr ] = useState<TpCxUsr | null>(null) // user related

    const [ iSrcV, setSrcV ] = useState("") // top input search value

    // get storage item, parse it to an json object, and assign it to a variable
    const cso = JSON.parse(String(localStorage.getItem("cIts")))
    // set items in cart from cart state object, or if no cso then empty array
    const [ iC, setC ] = useState(cso || [])

    const [ cStt, dsp ] = useReducer(reducer, { c: iC }) // set the cart state
    const addC = (i: TpIcart) => dsp({ type: "iAdd", it: i }) // increase click
    const delC = (i: TpIcart) => dsp({ type: "iDel", it: i }) // decrease click

    // on cart state change, save it as string in storage & as items in cart val
    useEffect(() => {
        // execute only if useReducer has already set a cart state
        if (cStt.c.length > 0) {
            localStorage.setItem("cIts", JSON.stringify(cStt.c))
            setC(cStt.c)
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
