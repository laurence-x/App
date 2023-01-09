import { lazy } from "react"

export const ElsHks = {
    UseCtx: lazy(() => import("../hooks/useContext")),
    UseRf: lazy(() => import("../hooks/useRef")),
    UseId: lazy(() => import("../hooks/useId")),
    UsePrm: lazy(() => import("../hooks/useParams")),
    UseSrcPrm: lazy(() => import("../hooks/useSearchParams")),
    UseLoc: lazy(() => import("../hooks/useLocation")),
    UseNvt: lazy(() => import("../hooks/useNavigate")),
    UseNvg: lazy(() => import("../hooks/useNavigation")),
    UseEff: lazy(() => import("../hooks/useEffect")),
    UseStt: lazy(() => import("../hooks/useState")),
    UseTrs: lazy(() => import("../hooks/useTransition")),
    UseRdc: lazy(() => import("../hooks/useReducer")),
    UseCbk: lazy(() => import("../hooks/useCallback")),
    UseMem: lazy(() => import("../hooks/useMemo")),
}
