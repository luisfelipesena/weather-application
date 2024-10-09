import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { ReactQueryProvider } from "./providers/react-query/provider";
import { WeatherDashboard, CityDashboard } from "./pages";

import './styles.css';

export const App = () => {
	const root = ReactDOM.createRoot(
		document.getElementById("root") as HTMLElement,
	);

	root.render(
		<ReactQueryProvider>
			<Router>
				<Routes>
					<Route path="/" element={
						<div>
							<Link to="/weather">Wheather</Link>
							<Link to="/city">City</Link>
						</div>
						 } />
					<Route path="/weather" element={<WeatherDashboard />} />
					<Route path="/city" element={<CityDashboard />} />
					<Route path="*" element={<div>404</div>} />
					</Routes>
				</Router>
		</ReactQueryProvider>,
	);
};

App();
