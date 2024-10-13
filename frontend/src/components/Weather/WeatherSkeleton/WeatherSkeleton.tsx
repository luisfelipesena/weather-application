import { Card, CardContent } from "../../ui/card";
import { Skeleton } from "../../ui/skeleton";

export const WeatherSkeleton = () => (
	<div className="flex flex-col gap-6">
		<div className="text-center">
			<Skeleton className="h-8 w-3/4 mx-auto mb-4 bg-white/50" />
			<div className="flex items-center justify-center mt-4">
				<Skeleton className="w-24 h-24 rounded-full  bg-white/50" />
				<div className="ml-4">
					<Skeleton className="h-12 w-32 mb-2  bg-white/50" />
					<Skeleton className="h-6 w-24  bg-white/50" />
				</div>
			</div>
		</div>
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
			{[...Array(4)].map((_, index) => (
				<Card key={index} className="bg-white/50">
					<CardContent className="flex items-center p-4">
						<Skeleton className="w-6 h-6 mr-4" />
						<div className="flex-grow">
							<Skeleton className="h-4 w-20 mb-2" />
							<Skeleton className="h-6 w-24" />
						</div>
					</CardContent>
				</Card>
			))}
		</div>
	</div>
);
