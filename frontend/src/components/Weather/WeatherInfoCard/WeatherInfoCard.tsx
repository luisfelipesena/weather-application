import { Card, CardContent } from "../../../components/ui/card";

export const WeatherInfoCard = ({
	icon,
	title,
	value,
}: { icon: React.ReactNode; title: string; value: string }) => {
	return (
		<Card className="bg-white/50">
			<CardContent className="flex items-center p-4">
				<div className="mr-4 text-gray-600">{icon}</div>
				<div>
					<div className="text-sm font-medium text-gray-500">{title}</div>
					<div className="text-lg font-semibold text-gray-800">{value}</div>
				</div>
			</CardContent>
		</Card>
	);
};
