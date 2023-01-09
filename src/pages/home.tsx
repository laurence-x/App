import { useMemo } from "react"
import { useNavigate } from "react-router-dom"

import { UCX } from "../contexts/mainCTX"
import list from "../data/home.json"

export default function Home() {
    const { usr, iSrcV } = UCX()
    const nvg = useNavigate()

    // check if name & description include the input search value
    const entries = useMemo(() => {
        return list.filter((i) =>
            [ i.e_nm.toLowerCase(), i.e_ds.toLowerCase() ].some((i) =>
                i.includes(iSrcV.toLowerCase())
            )
        )
    }, [ iSrcV ])

    return (
        <>
            <br />
            <p className="c y">
                {usr?.st ? `Hi ${usr?.nm}!` : `Go ahead, register & log in!`}
            </p>
            <br />
            {entries.map((i) => (
                <div className="hI" key={i.e_nm}>
                    <p onMouseUp={() => nvg(`/${i.e_lk}`)}>{i.e_nm}</p>
                    <p>{i.e_ds}</p>
                </div>
            ))}
        </>
    )
}
