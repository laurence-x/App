import { useCallback, useEffect, useState } from "react"

const UseCbk = () => {
    const [ nr, setNr ] = useState(0)
    const [ entries, newEntry ] = useState<string[]>([])
    const [ amount, setAmount ] = useState(0)

    const newNr = () => setNr((n) => n + 1)
    const newLn = useCallback(() => {
        return (l: string[]) => [ "Entry " + nr, ...l ]
    }, [ nr ])

    useEffect(() => {
        newEntry(newLn()) // new created line, gets added to entries for mapping
        console.log("newLn Fn called")
    }, [ newLn ])

    const add = () => {
        setAmount((n) => n + 1)
        console.log("No effect newLn")
    }

    return (
        <>
            <h1 className="g">useCallback</h1>
            <p>
                Used to memoize a fn, not its result, & return it when its
                dependency changes.
            </p>
            <br />
            <p className="g">Syntax:</p>
            <pre className="r">{`
const X = useCallback(() => { return (arr) => [...arr]}, [dep])
            `}</pre>
            <br />
            <p>
                Clicking the count button, will change the state & increase it's
                ammount, but the newLn fn doesn't get triggered because it is
                wrapped into a useCalback hook.
            </p>
            <input type="button" className="m" value={amount} onMouseUp={add} />
            <br />
            <p>
                Clicking the second button, triggers a change to the useCallback
                hook's dependency, which returns a new newLn fn, which triggers
                the useEffect hook and creates a new line entry.
            </p>
            <input type="button" className="m" value="new" onMouseUp={newNr} />
            <br />
            <div className="m">
                {entries.slice(0, 4).map((l, index) => {
                    return (
                        <p className="c y" key={index}>
                            {l}
                        </p>
                    )
                })}
            </div>
            <br />
            <code>
                <pre>{`
const [nr, setNr] = useState(0)
const [entries, newEntry] = useState<string[]>([])
const [amount, setAmount] = useState(0)

const newNr = () => setNr((n) => n + 1)
const newLn = useCallback(() => {
    return (l: string[]) => ["Entry " + nr, ...l]
}, [nr])

useEffect(() => {
    newEntry(newLn())
    console.log("newLn Fn called")
}, [newLn])

const add = () => {
    setAmount((n) => n + 1)
    console.log("No effect newLn")
}

# JSX
<input type="button" value={amount} onMouseUp={add} />
<br />
<input type="button" value="new" onMouseUp={newNr} />
<br />
<div>
    {entries.slice(0, 4).map((l) => {
        return (
            <p key={crypto.randomUUID()}>
                {l}
            </p>
        )
    })}
</div>
            `}</pre>
            </code>
        </>
    )
}
export default UseCbk
