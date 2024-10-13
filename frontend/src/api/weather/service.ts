import { axiosInstance } from "../common/axios-instance";
import type { ApiResponse } from "../common/types";
import type { WeatherProps, Weather } from "./types";

export const getWeather = async ({
	city,
	lat,
	lon,
}: WeatherProps): Promise<ApiResponse<Weather>> => {
	if (city) {
		const response = await axiosInstance.get(`/weather?city=${city}`);
		return response.data as ApiResponse<Weather>;
	}

	const response = await axiosInstance.get(`/weather?lat=${lat}&lon=${lon}`);
	return response.data as ApiResponse<Weather>;
};
