import { useReducer } from "react"
import { TpAct, TpStt } from "../types/TpUreducer"

const initialStt = { val: 0 }

const reducer = (state: TpStt, action: TpAct) => {
    const opt = {
        inc: { val: state.val + action.value! },
        dec: { val: state.val - action.value! },
        res: initialStt,
    }
    return opt[ action.type ]
}

const UseRdc = () => {
    const [ stateX, dispatchX ] = useReducer(reducer, initialStt)
    const [ stateY, dispatchY ] = useReducer(reducer, initialStt)

    return (
        <>
            <h1 className="g">useReducer</h1>
            <p>Useful when the next state depends on the previous.</p>
            <br />
            <p className="g">Syntax:</p>
            <pre className="r">
                {`const [state, dispatch] = useReducer(reducer, initialState)`}
            </pre>
            <br />
            <input
                type="button"
                className="m"
                value="+100"
                onMouseUp={() => dispatchX({ type: "inc", value: 100 })}
            />
            <b className="y">{stateX.val}</b>
            <input
                type="button"
                className="m"
                value="-100"
                onMouseUp={() => dispatchX({ type: "dec", value: 100 })}
            />
            <br />
            <input
                type="button"
                className="m"
                value="res"
                onMouseUp={() => dispatchX({ type: "res" })}
            />
            <br />
            <p className="c">one reducer for both cases</p>
            <br />
            <input
                type="button"
                className="m"
                value="+100"
                onMouseUp={() => dispatchY({ type: "inc", value: 100 })}
            />
            <b className="y">{stateY.val}</b>
            <input
                type="button"
                className="m"
                value="-100"
                onMouseUp={() => dispatchY({ type: "dec", value: 100 })}
            />
            <br />
            <input
                type="button"
                className="m"
                value="res"
                onMouseUp={() => dispatchY({ type: "res" })}
            />
            <br />
            <code>
                <pre>{`
import React, { useReducer } from "react"
const initialStt = { val: 0 }
interface TpStt {
    val: number
}
const reducer = (state: TpStt, action: TpAct) => {
    const opt = {
        inc: { val: state.val + action.value! },
        dec: { val: state.val - action.value! },
        res: initialStt,
    }
    return opt[action.type]
}
const UseRdc = () => {
    const [stateX, dispatchX] = useReducer(reducer, initialStt)
    const [stateY, dispatchY] = useReducer(reducer, initialStt)
    return (
        <>
            <input
                type="button"
                value="+100"
                onMouseUp={() => dispatchX({ type: "inc", value: 100 })}
            />
            <b>{stateX.val}</b>
            <input
                type="button"
                value="-100"
                onMouseUp={() => dispatchX({ type: "dec", value: 100 })}
            />
            <br />
            <input
                type="button"
                value="res"
                onMouseUp={() => dispatchX({ type: "res" })}
            />
            <br />
            <br />
            <input
                type="button"
                value="+100"
                onMouseUp={() => dispatchY({ type: "inc", value: 100 })}
            />
            <b>{stateY.val}</b>
            <input
                type="button"
                value="-100"
                onMouseUp={() => dispatchY({ type: "dec", value: 100 })}
            />
            <br />
            <input
                type="button"
                value="res"
                onMouseUp={() => dispatchY({ type: "res" })}
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
