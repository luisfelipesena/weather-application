import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { WeatherDashboard, NotFoundPage } from "./pages";
import { ReactQueryProvider } from "./providers/react-query/provider";

import "./styles.css";

export const App = () => {
	const root = ReactDOM.createRoot(
		document.getElementById("root") as HTMLElement,
	);

	root.render(
		<ReactQueryProvider>
			<Router>
				<Routes>
					<Route path="/" element={<WeatherDashboard />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</Router>
		</ReactQueryProvider>,
	);
};

App();
