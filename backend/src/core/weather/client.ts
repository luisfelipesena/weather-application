import { env } from "../../config/env";
import type { WeatherDto } from "./types";

export class WeatherApiClient {
	private readonly apiKey = env.WEATHER_API_KEY;

	async getWeatherByCity(city: string): Promise<WeatherDto> {
		const response = await fetch(
			`http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${city.trim()}`,
		);
		const data = (await response.json()) as WeatherDto;
		return data;
	}

	async getWeatherByCoordinates(lat: number, lon: number): Promise<WeatherDto> {
		const response = await fetch(
			`http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${lat},${lon}`,
		);
		const data = (await response.json()) as WeatherDto;
		return data;
	}
}
