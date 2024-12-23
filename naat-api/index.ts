import express from 'express';
import cors from 'cors'; // Correct import for TypeScript
import dotenv from 'dotenv';

import hamdRoutes from './routes/hamd';
import naatRoutes from './routes/naat';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/hamd', hamdRoutes);
app.use('/api/naat', naatRoutes);

// Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
