import { createContext, useContext, useState } from "react"
import { UseContext } from "../types/types"

export const CX = createContext<UseContext | null>(null)

const UseCtx = () => {
    const [ nm, setString ] = useState("Jack")
    const [ nr, setNumber ] = useState(0)

    const CxData: UseContext = { nm, nr, setString, setNumber }

    return (
        <>
            <h1 className="g">useContext</h1>
            <p>Pass data between components, without using props.</p>
            <p className="r">A refresh button click, and all data is gone!</p>
            <br />
            <p>Below is basic examples, made out of 3 files/components.</p>
            <p>
                The main file creates the context, the setter file sends the
                data to the main file, than it gets forwarded to the getter
                file.
            </p>
            <br />
            <CX.Provider value={CxData}>
                <CxConsumer />
                <CxSetter />
            </CX.Provider>
            <br />
            <b>code</b>
            <code>
                <pre>{`
export const CX = createContext<UseContext | null>(null)

const UseCtx = () => {
    const [nm, setString] = useState("Jack")
    const [nr, setNumber] = useState(0)

    const CxData: UseContext = { nm, nr, setString, setNumber }

    return (
        <>
            <CX.Provider value={CxData}>
                <CxConsumer />
                <CxSetter />
            </CX.Provider>
        </>
    )
}

const CxConsumer = () => {
    const ctxtD = useContext(CX)
    let name = ctxtD?.nm
    let numr = ctxtD?.nr

    return (
        <>
            <b>{name}</b>
            <b>{numr}</b>
        </>
    )
}

export const CxSetter = () => {
    const { setString, setNumber } = useContext(CX) as UseContext
    return (
        <>
            <input
                type="button"
                value="set"
                onMouseUp={() => {
                    setString("Mike")
                }}
            />
            <br />
            <input
                type="button"
                value="add"
                onMouseUp={() => {
                    setNumber((c: number) => c + 1)
                }}
            />
        </>
    )
}
            `}</pre>
            </code>
        </>
    )
}
export default UseCtx

const CxConsumer = () => {
    const ctxtD = useContext(CX)
    let name = ctxtD?.nm
    let numr = ctxtD?.nr

    return (
        <>
            <b>{name}</b>
            <b>{numr}</b>
        </>
    )
}

export const CxSetter = () => {
    const { setString, setNumber } = useContext(CX) as UseContext
    return (
        <>
            <input
                type="button"
                value="set"
                className="m"
                onMouseUp={() => {
                    setString("Mike")
                }}
            />
            <br />
            <input
                type="button"
                value="add"
                className="m"
                onMouseUp={() => {
                    setNumber((c: number) => c + 1)
                }}
            />
        </>
    )
}
