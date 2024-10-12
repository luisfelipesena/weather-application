import type React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "../../components/ui/card";

export const NotFoundPage: React.FC = () => {
	const navigate = useNavigate();

	const handleGoHome = () => {
		navigate("/");
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-8 flex items-center justify-center">
			<Card className="max-w-md w-full bg-white/90">
				<CardHeader>
					<CardTitle className="text-3xl font-bold text-center">
						404 - Page Not Found
					</CardTitle>
				</CardHeader>
				<CardContent className="text-center">
					<p className="mb-6">
						Oops! The page you're looking for doesn't exist.
					</p>
					<Button className="w-full" onClick={handleGoHome}>
						Go to Weather Dashboard
					</Button>
				</CardContent>
			</Card>
		</div>
	);
};
