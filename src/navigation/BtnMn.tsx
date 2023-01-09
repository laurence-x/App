import { UCX } from "../contexts/mainCTX"

const Mbtn = () => {
    const { expand, expandMenu } = UCX()

    const expandM = () => expandMenu(!expand)

    return (
        <div>
            <input
                id="mBtn"
                type="button"
                value="&#x2261;"
                onMouseUp={expandM}
            />
        </div>
    )
}

export default Mbtn
