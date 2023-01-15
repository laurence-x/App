import Errors from "../pages/errors"
import { ElsBps } from "./rt_Els_Bps"

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
        errorElement: <Errors page="bp none existent" />,
    },
]
