import { lazy } from "react"

export const ElsIts = {
    Items: lazy(() => import("../items/items")),
    Item: lazy(() => import("../items/item")),
    Cart: lazy(() => import("../items/cart")),
}
