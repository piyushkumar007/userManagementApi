import express, { Application } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import userRoutes from './routes/userRoutes';
import bodyParser from 'body-parser';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use('/backendTestRoutes', userRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
