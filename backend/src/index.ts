import express from 'express';
import dashboardRoutes from './routes/dasboard';
import { startConsumer } from './kafkaConsumer';
import cors from 'cors';
import { updateLiveData, aggregateHistory } from './store';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api', dashboardRoutes);

startConsumer((data) => {
  updateLiveData(data);
  aggregateHistory(data);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
