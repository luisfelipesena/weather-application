import { env } from "../../config/env";
import type { CityDto } from "./types";

export class CityClient {
	private readonly apiKey = env.API_NINJA_KEY;

	async getAllCitiesByQuery(query: string): Promise<CityDto[]> {
		const [name, country] = query.split(",");
		const searchParams = new URLSearchParams({ name: name.trim() });
		if (country) {
			searchParams.append("country", country.trim());
		}

		const response = await fetch(
			`https://api.api-ninjas.com/v1/city?${searchParams.toString()}&limit=30`,
			{
				headers: {
					"X-Api-Key": this.apiKey,
				},
			},
		);

		const data = await response.json();
		return data;
	}
}
