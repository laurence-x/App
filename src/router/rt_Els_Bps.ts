import { lazy } from "react"

export const ElsBps = {
    CodeSplit: lazy(() => import("../bps/codeSplit")),
    ObjDestruct: lazy(() => import("../bps/objDestruct")),
    JsxFns: lazy(() => import("../bps/jsxfns")),
    ObjSwitch: lazy(() => import("../bps/objSwitch")),
}
