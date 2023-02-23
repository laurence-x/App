import Errors from "../pages/errors"
import { ElsIts } from "./rt_Els_Its"

export const RoutesIts = [
    {
        index: true,
        element: <ElsIts.Items />,
        errorElement: <Errors page="items" />,
    },
    {
        path: ":id",
        element: <ElsIts.Item />,
        errorElement: <Errors page="item :id" />,
    },
    {
        path: "cart",
        element: <ElsIts.CartI />,
        errorElement: <Errors page="cart" />,
    },
    {
        path: "*",
        element: <ElsIts.Items />,
        errorElement: <Errors page="items none existent" />,
    },
]
