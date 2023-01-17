import { useEffect, useState } from "react"

const Test = () => {
    const [ Res, setRes ] = useState("")

    useEffect(() => {
        // const controller = new AbortController()

        let data = new URLSearchParams()
        data.append("Key", "Value")

        fetch("some_path_on_server", {
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
