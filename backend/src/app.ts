import cors from "cors";
import express from "express";
import { env } from "./config/env";
import { cityRoutes } from "./routes/city/routes";
import { weatherRoutes } from "./routes/weather/routes";

const PORT = env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
	res.send("OK");
});

app.use(weatherRoutes);
app.use(cityRoutes);

app.listen(PORT, () => {
	return console.log(`Express is listening at PORT: ${PORT}`);
});
