import { useState } from "react"
import { UseState } from "../types/types"

const UseStt = () => {
    const [ amount, setAmount ] = useState<number>(5)
    const add = () => {
        setAmount((n) => n + 1)
    }

    // const [obj, setVals] = useState<{ nm: string; nr: number }>({
    //     nm: "Jon",
    //     nr: 11,
    // })
    // const [obj, setVals] = useState<UseState>({ nm: "Jack", nr: 22 })
    const [ obj, setVals ] = useState<UseState | null>(null)

    // create an object
    const create = () => {
        setVals({
            nm: "Mike",
            nr: 10,
        })
    }

    return (
        <>
            <h1 className="g">useState</h1>
            <p>used to keep state & set values</p>
            <br />
            <p className="c">the usual counter example</p>
            <b className="c y">{amount}</b>
            <input className="m" type="button" onMouseUp={add} value="+" />
            <br />
            <code>
                <pre>{`
const [amount, setAmount] = useState<number>(5)
const add = () => {
    setAmount((n) => n + 1)
}

<b>{amount}</b>
<input type="button" onMouseUp={add} value="add" />
            `}</pre>
            </code>
            <br />
            <p className="c">set values & create an object</p>
            <b className="c y">
                {obj?.nm} {obj?.nr}
            </b>
            <input
                className="m"
                type="button"
                onMouseUp={create}
                value="create"
            />
            <br />
            <code>
                <pre>{`
# type versions
const [obj, setVals] = useState<UseState>({ nm: "Jack", nr: 22 })
const [obj, setVals] = useState<UseState | null>(null)

# directly delared:
const [obj, setVals] = useState<{ nm: string; nr: number }>({
    nm: "Jon",
    nr: 11,
})

# Create object function:
const create = () => {
    setVals({
        nm: "Mike",
        nr: 10,
    })
}

# JSX part:
<b>
    {obj?.nm} {obj?.nr}
</b>
<input
    type="button"
    onMouseUp={create}
    value="create"
/>
            `}</pre>
            </code>
        </>
    )
}
export default UseStt
