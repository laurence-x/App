import { useState } from "react"
import MLinks from "./mLink"

const MSecHk = () => {
    const [ classSecHk, setSecHk ] = useState(false)
    const clickSecHk = () => setSecHk(!classSecHk)

    return (
        <>
            <div
                onMouseUp={clickSecHk}
                className={classSecHk ? "p sBtn open" : "p sBtn"}
            >
                ReactJs Hooks
            </div>
            <div className={classSecHk ? "sMenu show" : "sMenu hide"}>
                <MLinks mType="Hk" />
            </div>
        </>
    )
}

export default MSecHk
