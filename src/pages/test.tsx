import { useEffect, useState } from "react"

const Test = () => {
    const [ Res, setRes ] = useState("")

    useEffect(() => {
        // setRes('xxx') // if no fetching

        let data = new URLSearchParams()
        data.append("name", "Xname")
        data.append("email", "aaaa@x.com")

        //~ fetching the package.json key "proxy": "http://127.0.0.1:3001"
        fetch("user", {
            method: "POST",
            body: data,
        })
            .then((r) => r.text())
            //TODO here also check for status code 200, else output is an error
            .then((r) => setRes(r))
            .catch((e) => setRes(e))
    }, [])

    return <>{Res}</>
}

export default Test
