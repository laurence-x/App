import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { TpGprm } from "../types/uSrcPrmsT"

const UseSrcPrm = () => {
    let [ searchParams, setSearchParams ] = useSearchParams()
    const [ pval, setPval ] = useState("")

    // 1
    let SrcVal: string | null = "---" // initial value
    searchParams.get("nm") !== null && (SrcVal = searchParams.get("nm"))

    // 2
    const setParams = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        setSearchParams("nm=Mike&ag=24")
        setPval("") // resetting param from step 3
    }

    // 3
    const getParams = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        let param: string | null = "first click set above"
        searchParams.get("ag") !== null && (param = searchParams.get("ag"))
        setPval(String(param))
        console.log(searchParams) // log, all existing params in the url bar
    }

    // 4
    const setgetParams = (e: TpGprm) => {
        e.preventDefault()
        // ~ get input data, while typing: s, t, i,.
        setSearchParams({
            i: e.target.id,
            t: e.target.type,
            v: e.target.value,
            p: e.target.placeholder,
            n: e.target.name,
            tt: e.target.title,
            a: e.target.alt,
        })
        console.log(e.target) // get all element attributes
    }

    let iVal: string | null = ""
    searchParams.get("v") !== null && (iVal = searchParams.get("v"))

    return (
        <>
            <h1 className="g">useSearchParams</h1>
            <p>Get & set url attributes in the address bar.</p>
            <br />
            <p>
                1) If the param "nm", is set in the url bar, it will apear here.
            </p>
            <b className="r">{SrcVal}</b>
            <br />
            <p>
                2) Click the button to update the url bar, with the serialized
                form submit type string.
            </p>
            <p className="c y">"nm=Mike&ag=24"</p>
            <input
                type="button"
                className="m"
                onMouseUp={setParams}
                value="set"
            />
            <br />
            <br />
            <p>3) Click the get btn, will get & display the param "ag" here.</p>
            <b className="y">{pval}</b>
            <input
                type="button"
                className="m"
                onMouseUp={getParams}
                value="get"
            />
            <br />
            <br />
            <p>
                4) The text typed below, sets the url bar params, and gets
                displayed here.
            </p>
            <b className="y">{iVal}</b>
            <input
                id="setP"
                type="text"
                className="m"
                value={String(iVal)}
                onChange={setgetParams}
                placeholder="type..."
                name="xname"
                title="xtitle"
                alt="xalt"
                autoFocus={false}
                autoComplete="off"
                required
            // readOnly
            // disabled
            />
            <br />
            <code>
                <pre>{`
let [searchParams, setSearchParams] = useSearchParams()
const [pval, setPval] = useState("")

1. Example
let SrcVal: string | null = "---"
searchParams.get("nm") !== null && (SrcVal = searchParams.get("nm"))
<b>{SrcVal}</b>

2. Example
const setParams = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setSearchParams("nm=Mike&ag=24")
    setPval("") // resetting param from step 3
}
<input
    onMouseUp={setParams}
    type="button"
    value="set"
/>

3. Example
const getParams = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    let param: string | null = ""
    searchParams.get("ag") !== null && (param = searchParams.get("ag"))
    setPval(String(param))
    console.log(searchParams) // log, all existing params in the url bar
}
<input
    onMouseUp={getParams}
    type="button"
    value="get"
/>
<b>{pval}</b>

4. Example
const setgetParams = (e: {
    preventDefault: () => void
    target: {
        id: string
        type: string
        value: string
        placeholder: string
        name: string
        title: string
        alt: string
        autofocus: boolean
    }
}) => {
    e.preventDefault()
    setSearchParams({
        i: e.target.id,
        t: e.target.type,
        v: e.target.value,
        p: e.target.placeholder,
        n: e.target.name,
        tt: e.target.title,
        a: e.target.alt,
    })
    console.log(e.target) // get all element attributes
}
let iVal: string | null = ""
searchParams.get("v") !== null && (iVal = searchParams.get("v"))
<b>{iVal}</b>
<input
    onChange={setgetParams}
    id="setP"
    type="text"
    value={String(iVal)}
    placeholder="type..."
    name="xname"
    title="xtitle"
    alt="xalt"
    autoFocus={false}
/>
            `}</pre>
            </code>
        </>
    )
}

export default UseSrcPrm
