import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { WeatherDashboard, NotFoundPage } from "./pages";
import { ReactQueryProvider } from "./providers/react-query/provider";
import { ToastContainer } from "react-toastify";

import "./styles.css";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
	const root = ReactDOM.createRoot(
		document.getElementById("root") as HTMLElement,
	);

	root.render(
		<ReactQueryProvider>
			<ToastContainer />
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
