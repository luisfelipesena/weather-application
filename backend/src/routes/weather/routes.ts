import { Router } from "express";
import { WeatherApiService } from "../../core/weather/service";

const router = Router();
const weatherApiService = new WeatherApiService();

router.get("/weather", async (req, res) => {
	const { city, lat, lon } = req.query;
	const weather = await weatherApiService.getWeatherByParams(
		city as string,
		lat as string,
		lon as string,
	);
	res.json(weather);
});

export { router as weatherRoutes };
