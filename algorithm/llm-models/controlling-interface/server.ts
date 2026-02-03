import express from 'express';
import cors from 'cors';
import { loadEnv, getEnv } from './server/config/env';
import modelsRoutes from './server/routes/modelsRoutes';
import vendorsRoutes from './server/routes/vendorsRoutes';
import teamsRoutes from './server/routes/teamsRoutes';
import membersRoutes from './server/routes/membersRoutes';
import usersRoutes from './server/routes/usersRoutes';
import sessionsRoutes from './server/routes/sessionsRoutes';
import settingsRoutes from './server/routes/settingsRoutes';
import exploreRoutes from './server/routes/exploreRoutes';

loadEnv();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', modelsRoutes);
app.use('/api', vendorsRoutes);
app.use('/api', teamsRoutes);
app.use('/api', membersRoutes);
app.use('/api', usersRoutes);
app.use('/api', sessionsRoutes);
app.use('/api', settingsRoutes);
app.use('/api', exploreRoutes);

app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    console.error('Server error:', err);
    res.status(500).json({ error: err.message ?? 'Internal Server Error' });
});

const { port } = getEnv();
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
