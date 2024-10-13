import { render, screen } from "@testing-library/react";
import { WeatherDashboard } from "./WeatherDashboard";

test("renders learn react link", () => {
	render(<WeatherDashboard />);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
