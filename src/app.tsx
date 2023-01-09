import { Outlet, ScrollRestoration, useLocation } from "react-router-dom"
import EventMouseUp from "./fns/eMouseUp"
import Path from "./fns/path"
import Menu from "./menu/menu"
import Nav from "./navigation/navbar"
import AutoOut from "./user/out"

export default function App() {
    const path = useLocation().pathname
    EventMouseUp()
    AutoOut()
    Path()

    return (
        <>
            <Nav />
            <main>
                <div>
                    <Menu />
                </div>
                <div>
                    <Outlet />
                </div>
            </main>
            <ScrollRestoration
                getKey={(location) => {
                    return path
                        .toLowerCase()
                        .includes(location.pathname.toLowerCase())
                        ? location.pathname
                        : location.key
                }}
            />
        </>
    )
}
