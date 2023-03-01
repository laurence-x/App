import { lazy } from "react"

export const ElsShp = {
    Items: lazy(() => import("../shop/items")),
    Item: lazy(() => import("../shop/item")),
    CartI: lazy(() => import("../shop/carti")),
}
