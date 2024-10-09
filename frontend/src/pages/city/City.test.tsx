import { render, screen } from "@testing-library/react";
import { CityDashboard } from "./City";

test("renders learn react link", () => {
	render(<CityDashboard />);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
