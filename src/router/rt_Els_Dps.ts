import { lazy } from "react"

export const ElsDps = {
	Singleton: lazy(() => import("../dps/singleton")),
	Factorial: lazy(() => import("../dps/factorial")),
	Prototype: lazy(() => import("../dps/prototype")),
	Observer: lazy(() => import("../dps/observer")),
	Adapter: lazy(() => import("../dps/adapter")),
	Decorator: lazy(() => import("../dps/decorator")),
	MVC: lazy(() => import("../dps/mvc")),
}
