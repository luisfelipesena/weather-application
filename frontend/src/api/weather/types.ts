export type Weather = {
	name: string;
	region: string;
	country: string;
	latitude: number;
	longitude: number;
	temperature: number;
	condition: string;
	windSpeed: number;
	windDirection: string;
	humidity: number;
	cloudCover: number;
	visibility: number;
};

export type WeatherProps = {
	city?: string;
	lat?: string;
	lon?: string;
};
