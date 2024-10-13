import { useQuery } from "@tanstack/react-query";
import { getWeather } from "./service";
import type { WeatherProps } from "./types";

export const useWeather = ({ city, lat, lon }: WeatherProps) => {
	return useQuery({
		queryKey: ["weather", city, lat, lon],
		enabled: !!city || (!!lat && !!lon),
		queryFn: async () => {
			const response = await getWeather({ city, lat, lon });
			if (response.error) {
				throw new Error(response.error);
			}
			return response.data;
		},
	});
};
