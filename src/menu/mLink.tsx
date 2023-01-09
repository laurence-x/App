import { NavLink } from "react-router-dom"

import { mLink } from "../types/types"
import mItems from "./m_Items"

const MLinks = (props: { mType: string }) => {
    return (
        <>
            {mItems.map(
                (i: mLink) =>
                    i.menu === props.mType && (
                        <NavLink
                            key={i.name}
                            to={i.path}
                            className="p mB"
                            style={({ isActive }) =>
                                isActive ? { color: "#aa2" } : undefined
                            }
                        >
                            {/* {i.icon} */}
                            {i.name}
                        </NavLink>
                    )
            )}
        </>
    )
}

export default MLinks
