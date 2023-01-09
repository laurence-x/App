export default function MVC() {
	return (
		<>
			<b>Architectural Pattern</b>
			<br />
			<h1 className="y c">MVC</h1>
			<br />
			<br />
			<b className="g">model</b>
			<p>
				Handles data logic, connecting & querying DB, sends data to
				Controller.
			</p>
			<br />
			<br />
			<b className="g">View</b>
			<p>
				Used for the UI logic of the application, it receives, renders
				html and presents the data.
			</p>
			<br />
			<br />
			<b className="g">controller</b>
			<p>
				An interface between the Model and View, gets request from user,
				communicates to Model, gets data from Model & displays it to
				View.
			</p>
			<br />
			<br />
			<br />
			<p>Model & View never interact with each other.</p>
			<p>Logic (Model) & Handling Data (View) are separated.</p>
		</>
	)
}
