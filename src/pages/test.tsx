import { useEffect, useState } from "react"

const Test = () => {
    const [ Res, setRes ] = useState("")

    useEffect(() => {
        // setRes('xxx')

        //~ is it fetching the proxy key entry?: http://127.0.0.1:3001/....
        let data = new URLSearchParams()
        data.append("Key", "Value")
        fetch("path?a=111&b=222", {
            // fetch("cluster_test", {
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
