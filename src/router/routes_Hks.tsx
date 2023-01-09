import Errors from "../pages/errors"
import { ElsHks } from "./rt_Els_Hks"

export const RoutesHks = [
    {
        path: "useCtx",
        element: <ElsHks.UseCtx />,
        errorElement: <Errors page="useCtx" />,
    },
    {
        path: "useRf",
        element: <ElsHks.UseRf />,
        errorElement: <Errors page="useRf" />,
    },
    {
        path: "useID",
        element: <ElsHks.UseId />,
        errorElement: <Errors page="useID" />,
    },
    {
        path: ":usePrm",
        element: <ElsHks.UsePrm />,
        errorElement: <Errors page="usePrm" />,
    },
    {
        path: "useSrcPrm",
        element: <ElsHks.UseSrcPrm />,
        errorElement: <Errors page="useSrcPrm" />,
    },
    {
        path: "useLoc",
        element: <ElsHks.UseLoc />,
        errorElement: <Errors page="useLoc" />,
    },
    {
        path: "useNvt",
        element: <ElsHks.UseNvt />,
        errorElement: <Errors page="useNvt" />,
    },
    {
        path: "useNvg",
        element: <ElsHks.UseNvg />,
        errorElement: <Errors page="useNvg" />,
    },
    {
        path: "useEff",
        element: <ElsHks.UseEff />,
        errorElement: <Errors page="useEff" />,
    },
    {
        path: "useStt",
        element: <ElsHks.UseStt />,
        errorElement: <Errors page="useStt" />,
    },
    {
        path: "useTrs",
        element: <ElsHks.UseTrs />,
        errorElement: <Errors page="useTrs" />,
    },
    {
        path: "useRdc",
        element: <ElsHks.UseRdc />,
        errorElement: <Errors page="useRdc" />,
    },
    {
        path: "useCbk",
        element: <ElsHks.UseCbk />,
        errorElement: <Errors page="useCbk" />,
    },
    {
        path: "useMem",
        element: <ElsHks.UseMem />,
        errorElement: <Errors page="useMem" />,
    },
    {
        path: "*",
        element: <ElsHks.UseCtx />,
        errorElement: <Errors page="hooks none existend" />,
    },
]
