// import { useEffect, useState } from "react"

const Test = () => {
    // const [ Res, setRes ] = useState("")

    // useEffect(() => {
    // const controller = new AbortController()

    let data = new URLSearchParams()
    data.append("Jack", "Driver")

    fetch("http://127.0.0.1:3001", {
        method: "POST",
        body: data,
        // signal: controller.signal,
    })
        .then((res) => res.text())
        .then((r) => console.log("Res: ", r))
        .catch((e) => console.log("Err: ", e))

    // controller.abort()
    // }, [])

    return <div>test...</div>
}

export default Test
