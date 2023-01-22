import { useEffect, useState } from "react"

const Test = () => {
    const [ Res, setRes ] = useState("")

    useEffect(() => {
        // const controller = new AbortController()

        let data = new URLSearchParams()
        data.append("Key", "Value")

        // http://127.0.0.1:3001/...
        fetch("path?a=aaa&b=bbb", {
            method: "POST",
            body: data,
            // signal: controller.signal,
        })
            // .then((r) => r.json())
            .then((r) => r.text())
            .then((r) => setRes(r))
            .catch((e) => setRes(e))

        // return controller.abort()
    }, [])

    return <>{Res}</>
}

export default Test
