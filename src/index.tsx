import React, { lazy, Suspense } from "react"
import ReactDOM from "react-dom/client"
import {
    createHashRouter,
    RouterProvider,
} from "react-router-dom"

import CxProv from "./contexts/mainCTX"
import "./styles/index.css"

import delay from "./fns/delay"
import Preloader from "./fns/preloader"
import Errors from "./pages/errors"
import { Routes } from "./router/routes"

const Page = lazy(() => delay(800).then(() => import("./app")))

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Suspense fallback={<Preloader />}>
            <CxProv>
                <RouterProvider
                    router={createHashRouter([
                        {
                            path: "/",
                            element: <Page />,
                            children: Routes,
                            errorElement: <Errors page="index" />,
                        },
                    ])}
                    fallbackElement={<p>loading...</p>}
                />
            </CxProv>
        </Suspense>
    </React.StrictMode>
)
