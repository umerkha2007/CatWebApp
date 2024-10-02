import express from 'express';
import cors from 'cors';
import catRoutes from './routes/cats.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// import photos
app.use(express.static("public"))

app.use('/cats', catRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));