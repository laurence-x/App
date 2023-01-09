import { useEffect, useState } from "react"
import { useLocation, useRouteError } from "react-router-dom"
import Redir from "../fns/redir"

export default function Errors(p: { page: string }) {
    const [ eData, setErrData ] = useState("No error")
    const error: any = useRouteError()
    let { state } = useLocation()

    error && setErrData(String(p.page))
    state && setErrData(String(state.r))

    useEffect(() => {
        const controller = new AbortController()
        let fData = new URLSearchParams()
        fData.append("err", eData)
        fetch("../php/errors.php", {
            method: "POST",
            body: fData,
            signal: controller.signal,
        }).catch((error) => {
            console.error("ErrorS:", error)
        })
        return () => controller.abort()
    }, [ eData ])

    return (
        <>
            <b className="r">Error</b>
            <br />
            <br />
            {error && (
                <div>
                    <p className="y">Path:</p>
                    <p>{p.page}</p>
                    <p className="y">Status:</p>
                    <p>{error.status}</p>
                    <p>{error.statusText}</p>
                    <p className="y">Message:</p>
                    <p>{error.message}</p>
                    <p className="y">Data:</p>
                    <p>{error.data}</p>
                </div>
            )}
            {state && <p className="y c">{state.r}</p>}
            <Redir
                navData={{
                    go: "",
                    tm: 20,
                }}
            />
        </>
    )
}

/*
r = "cc": "enable browser cookies";
r = "ca": "use firefox or chrome";
r = "ce": "check error";
r = "cv": "check visitor error";
r = "cl": "check log error"; -> logged check error: logged.tsx
~ status not 200
r = "sc": "status check error";
r = "sa": "status agent error";
r = "sl": "status log error"; -> logged status error: logged.tsx
r = "sj": "status json error";
~ fetch error
r = "rc": "request check error"; -> blocked more than 4 trials: user.php
r = "ra": "request agent error";
r = "rl": "request log error";
r = "rj": "request json error";
*/
