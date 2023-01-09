import { Outlet } from "react-router-dom"

const LayDps = () => {
	return (
		<>
			<Outlet />
			<br />
			<hr />
			<br />
			<p className="c bl">
				Design Patterns are Best Practices of organizing reusable code for solving reoccurring tasks
			</p>
			<br />
		</>
	)
}

export default LayDps
