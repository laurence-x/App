import { useState } from "react"
import MLinks from "./mLink"

const MSecBp = () => {
    const [ classSecBp, setSecBp ] = useState(false)
    const clickSecBp = () => setSecBp(!classSecBp)

    return (
        <>
            <div
                onMouseUp={clickSecBp}
                className={classSecBp ? "p sBtn open" : "p sBtn"}
            >
                Best Practices
            </div>
            <div className={classSecBp ? "sMenu show" : "sMenu hide"}>
                <MLinks mType="Bp" />
            </div>
        </>
    )
}

export default MSecBp
