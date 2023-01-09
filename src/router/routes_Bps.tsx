import { ElsBps } from "./rt_Els_Bps"
import Errors from "../pages/errors"

export const RoutesBps = [
    {
        path: "codeSplit",
        element: <ElsBps.CodeSplit />,
        errorElement: <Errors page="codeSplit" />,
    },
    {
        path: "objDestruct",
        element: <ElsBps.ObjDestruct />,
        errorElement: <Errors page="objDestruct" />,
    },
    {
        path: "jsxfns",
        element: <ElsBps.JsxFns />,
        errorElement: <Errors page="jsxfns" />,
    },
    {
        path: "objswitch",
        element: <ElsBps.ObjSwitch />,
        errorElement: <Errors page="objswitch" />,
    },
    {
        path: "*",
        element: <ElsBps.CodeSplit />,
        errorElement: <Errors page="bp none existend" />,
    },
]
