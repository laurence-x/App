import { useReducer } from "react"
import { TpAct, TpStt } from "../types/uReducerT"

const iniStt = { val: 0 }

const rdcFn = (stt: TpStt, act: TpAct) => {
    const opt = {
        inc: { val: stt.val + act.data! },
        dec: { val: stt.val - act.data! },
        res: iniStt,
        NOT_FOUND: stt,
    }
    return opt[ act.tp ]
}

const UseRdc = () => {
    const [ sttX, dspX ] = useReducer(rdcFn, iniStt)
    const [ sttY, dspY ] = useReducer(rdcFn, iniStt)

    return (
        <>
            <h1 className="g">useReducer</h1>
            <p>Useful when the next state depends on the previous.</p>
            <br />
            <p className="g">Syntax:</p>
            <pre className="r">
                {`const [state, dispatch] = useReducer(reducerFn, initialState)`}
            </pre>
            <br />
            <input
                type="button"
                className="m"
                value="+100"
                onMouseUp={() => dspX({ tp: "inc", data: 100 })}
            />
            <b className="y">{sttX.val}</b>
            <input
                type="button"
                className="m"
                value="-100"
                onMouseUp={() => dspX({ tp: "dec", data: 100 })}
            />
            <br />
            <input
                type="button"
                className="m"
                value="res"
                onMouseUp={() => dspX({ tp: "res" })}
            />
            <br />
            <p className="c">one reducerFn for both cases</p>
            <br />
            <input
                type="button"
                className="m"
                value="+100"
                onMouseUp={() => dspY({ tp: "inc", data: 100 })}
            />
            <b className="y">{sttY.val}</b>
            <input
                type="button"
                className="m"
                value="-100"
                onMouseUp={() => dspY({ tp: "dec", data: 100 })}
            />
            <br />
            <input
                type="button"
                className="m"
                value="res"
                onMouseUp={() => dspY({ tp: "res" })}
            />
            <br />
            <code>
                <pre>{`
import React, { useReducer } from "react"
const iniStt = { val: 0 }
interface TpStt {
    val: number
}
const rdcFn = (stt: TpStt, act: TpAct) => {
    const opt = {
        inc: { val: stt.val + act.data! },
        dec: { val: stt.val - act.data! },
        res: iniStt,
        NOT_FOUND: stt,
    }
    return opt[act.tp]
}
const UseRdc = () => {
    const [sttX, dspX] = useReducer(rdcFn, iniStt)
    const [sttY, dspY] = useReducer(rdcFn, iniStt)
    return (
        <>
            <input
                type="button"
                value="+100"
                onMouseUp={() => dspX({ tp: "inc", data: 100 })}
            />
            <b>{sttX.val}</b>
            <input
                type="button"
                value="-100"
                onMouseUp={() => dspX({ tp: "dec", data: 100 })}
            />
            <br />
            <input
                type="button"
                value="res"
                onMouseUp={() => dspX({ tp: "res" })}
            />
            <br />
            <br />
            <input
                type="button"
                value="+100"
                onMouseUp={() => dspY({ tp: "inc", data: 100 })}
            />
            <b>{sttY.val}</b>
            <input
                type="button"
                value="-100"
                onMouseUp={() => dspY({ tp: "dec", data: 100 })}
            />
            <br />
            <input
                type="button"
                value="res"
                onMouseUp={() => dspY({ tp: "res" })}
            />
        </>
    )
}
export default UseRdc
            `}</pre>
            </code>
        </>
    )
}

export default UseRdc
