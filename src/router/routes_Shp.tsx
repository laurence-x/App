import Errors from "../pages/errors"
import { ElsShp } from "./rt_Els_Shp"

export const RoutesShp = [
    {
        index: true,
        element: <ElsShp.Items />,
        errorElement: <Errors page="items" />,
    },
    {
        path: ":id",
        element: <ElsShp.Item />,
        errorElement: <Errors page="item :id" />,
    },
    {
        path: "cart",
        element: <ElsShp.CartI />,
        errorElement: <Errors page="cart" />,
    },
    {
        path: "*",
        element: <ElsShp.Items />,
        errorElement: <Errors page="items none existent" />,
    },
]
