import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const PORT = process.env.PORT || 5501;
const corsOptions = {
    origin: "http://localhost:5173"
};

const app = express();

app.use(express.json());

app.use(cors(corsOptions));

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});