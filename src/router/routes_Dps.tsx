import Errors from "../pages/errors"
import { ElsDps } from "./rt_Els_Dps"

export const RoutesDps = [
	{
		path: "singleton",
		element: <ElsDps.Singleton />,
		errorElement: <Errors page="singleton" />,
	},
	{
		path: "factorial",
		element: <ElsDps.Factorial />,
		errorElement: <Errors page="factorial" />,
	},
	{
		path: "prototype",
		element: <ElsDps.Prototype />,
		errorElement: <Errors page="prototype" />,
	},
	{
		path: "observer",
		element: <ElsDps.Observer />,
		errorElement: <Errors page="observer" />,
	},
	{
		path: "adapter",
		element: <ElsDps.Adapter />,
		errorElement: <Errors page="adapter" />,
	},
	{
		path: "decorator",
		element: <ElsDps.Decorator />,
		errorElement: <Errors page="decorator" />,
	},
	{
		path: "mvc",
		element: <ElsDps.MVC />,
		errorElement: <Errors page="mvc" />,
	},
	{
		path: "*",
		element: <ElsDps.Singleton />,
		errorElement: <Errors page="dp none existend" />,
	},
]
