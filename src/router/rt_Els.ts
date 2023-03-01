import { lazy } from "react"

export const Els = {
    Home: lazy(() => import("../pages/home")),

    Login: lazy(() => import("../user/login/login")),
    Registration: lazy(() => import("../user/registration/registration")),
    Recovery: lazy(() => import("../user/recovery/recovery")),
    Res: lazy(() => import("../user/reset/reset")),

    LayShp: lazy(() => import("../layouts/lay_Shp")),
    Nasa: lazy(() => import("../pages/nasa")),

    LayHks: lazy(() => import("../layouts/lay_Hks")),
    LayBps: lazy(() => import("../layouts/lay_Bps")),
    LayDps: lazy(() => import("../layouts/lay_Dps")),


    Contact: lazy(() => import("../contact/contact")),

    Test: lazy(() => import("../pages/test")),
    // Test: lazy(() => import("../redux/notes")),

    Errors: lazy(() => import("../pages/errors")),

}
