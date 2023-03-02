import { useEffect, useState } from "react"

const Test = () => {
    const [ Res, setRes ] = useState("")

    useEffect(() => {
        // setRes('xxx') // if no fetching

        let data = new URLSearchParams()
        data.append("Key", "Value")

        //~ fetching the "proxy": "http://127.0.0.1:3001", key in package.json
        fetch("path?a=111&b=222", {
            method: "POST",
            body: data,
        })
            // .then((r) => r.json())
            .then((r) => r.text())
            .then((r) => setRes(r))
            .catch((e) => setRes(e))
    }, [])

    return <>{Res}</>
}

export default Test
