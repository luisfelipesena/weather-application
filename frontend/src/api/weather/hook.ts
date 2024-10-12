import { useQuery } from "@tanstack/react-query";
import { getWeather } from "./service";
import type { WeatherProps } from "./types";

export const useWeather = ({ city, lat, lon }: WeatherProps) => {
	return useQuery({
		queryKey: ["weather", city, lat, lon],
		queryFn: async () => getWeather({ city, lat, lon }),
	});
};
