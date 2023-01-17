import { useEffect } from "react"

const Test = () => {
    useEffect(() => {


        console.log("TTTTTTTTTTTT")

        fetch("http://127.0.0.1:3001/")
            .then((response) => response.text())
            .then((r) => {
                console.log("Resp: ", r)
            })
            .catch((error) => {
                console.error("Error Test: ", error)
            })


    })

    return <>test...</>
}

export default Test
