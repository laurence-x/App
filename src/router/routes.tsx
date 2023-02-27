import { RouteObject } from "react-router-dom"

import { RoutesBps } from "./routes_Bps"
import { RoutesDps } from "./routes_Dps"
import { RoutesHks } from "./routes_Hks"
import { RoutesIts } from "./routes_Its"
import { Els } from "./rt_Els"

export const Routes: RouteObject[] = [
    {
        index: true,
        element: <Els.Home />,
        /*
        ~ actions -> post, put, patch, delete -> provide data for loader
        ~ loader -> send data to element, before rendering
        ~ elm get data -> let x = useLoaderData()
        */
        errorElement: <Els.Errors page="home" />,
    },
    {
        path: "login",
        element: <Els.Login />,
        errorElement: <Els.Errors page="login" />,
    },
    {
        path: "reg",
        element: <Els.Registration />,
        errorElement: <Els.Errors page="Registration" />,
    },
    {
        path: "rec",
        element: <Els.Recovery />,
        errorElement: <Els.Errors page="Recovery" />,
    },
    {
        path: "res",
        element: <Els.Res />,
        errorElement: <Els.Errors page="Reset" />,
    },
    {
        path: "items",
        element: <Els.LayItems />,
        children: RoutesIts,
    },
    {
        path: "nasa",
        element: <Els.Nasa />,
        errorElement: <Els.Errors page="nasa" />,
    },
    {
        path: "hks",
        element: <Els.LayHks />,
        children: RoutesHks,
    },
    {
        path: "test",
        element: <Els.Test />,
        errorElement: <Els.Errors page="test" />,
    },
    {
        path: "bps",
        element: <Els.LayBps />,
        children: RoutesBps,
    },
    {
        path: "dps",
        element: <Els.LayDps />,
        children: RoutesDps,
    },
    {
        path: "contact",
        element: <Els.Contact />,
        errorElement: <Els.Errors page="contact" />,
    },
    {
        path: "errors",
        element: <Els.Errors page="direct" />,
    },
    {
        path: "*",
        element: <Els.Home />,
        errorElement: <Els.Errors page="page none existent" />,
    },
]
