import type { ApiResponse } from "../../common/types";
import { WeatherApiClient } from "./client";
import type { Weather, WeatherDto } from "./types";

export class WeatherApiService {
	private readonly client: WeatherApiClient;

	constructor() {
		this.client = new WeatherApiClient();
	}

	async getWeatherByParams(
		city: string,
		lat: string,
		lon: string,
	): Promise<ApiResponse<Weather>> {
		try {
			const data = city
				? await this.client.getWeatherByCity(city)
				: await this.client.getWeatherByCoordinates(Number(lat), Number(lon));
			const parsedWeather = this.parseWeather(data);
			return {
				success: true,
				message: "Weather fetched successfully",
				data: parsedWeather,
			};
		} catch (error) {
			return {
				success: false,
				message: "Error fetching weather",
				error: error,
			};
		}
	}

	async getWeatherByCoordinates(
		lat: number,
		lon: number,
	): Promise<ApiResponse<Weather>> {
		try {
			const data = await this.client.getWeatherByCoordinates(lat, lon);
			const parsedWeather = this.parseWeather(data);
			return {
				success: true,
				message: "Weather fetched successfully",
				data: parsedWeather,
			};
		} catch (error) {
			return {
				success: false,
				message: "Error fetching weather",
				error: error,
			};
		}
	}

	parseWeather(weather: WeatherDto): Weather {
		return {
			latitude: weather.location.lat,
			longitude: weather.location.lon,
			temperature: weather.current.temp_c,
			condition: weather.current.condition.text,
			windSpeed: weather.current.wind_kph,
			windDirection: weather.current.wind_dir,
			humidity: weather.current.humidity,
			cloudCover: weather.current.cloud,
			visibility: weather.current.vis_km,
			name: weather.location.name,
			region: weather.location.region,
			country: weather.location.country,
		};
	}
}
