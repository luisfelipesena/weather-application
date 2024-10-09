import dotenv from "dotenv";
dotenv.config();

export const env = {
	PORT: process.env.PORT || 3001,
	WEATHER_API_KEY: process.env.WEATHER_API_KEY,
	API_NINJA_KEY: process.env.API_NINJA_KEY,
};
