import { render, screen } from "@testing-library/react";
import { NotFoundPage } from "./NotFound";

test("renders learn react link", () => {
	render(<NotFoundPage />);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
