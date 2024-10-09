import express from 'express';
import { env } from './config/env';

const PORT = env.PORT;

const app = express();

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(PORT, () => {
	return console.log(`Express is listening at http://localhost:${PORT}`);
});
