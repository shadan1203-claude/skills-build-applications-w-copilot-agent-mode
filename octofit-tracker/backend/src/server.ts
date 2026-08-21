import express from 'express';
import type { Express } from 'express';
import type { Model } from 'mongoose';
import { connectDatabase } from './config/database.js';
import { Activity, LeaderboardEntry, Team, User, Workout } from './models/index.js';
import { createResourceRouter } from './routes/resource.js';

const port = 8000;
const codespaceName = process.env.CODESPACE_NAME;
const frontendOrigin =
  process.env.FRONTEND_ORIGIN ||
  (codespaceName
    ? `https://${codespaceName}-5173.app.github.dev`
    : 'https://fictional-space-guacamole-97ppp6qq4rq5hxr74-5173.app.github.dev');
export const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

export function createApp(): Express {
  const app = express();

  app.disable('x-powered-by');
  app.use(express.json());
  app.use((request, response, next) => {
    if (request.headers.origin === frontendOrigin) {
      response.header('Access-Control-Allow-Origin', frontendOrigin);
      response.header('Vary', 'Origin');
      response.header('Access-Control-Allow-Methods', 'GET');
      response.header('Access-Control-Allow-Headers', 'Content-Type');
    }
    if (request.method === 'OPTIONS') {
      response.sendStatus(204);
      return;
    }
    next();
  });

  app.get('/api/health', (_request, response) => {
    response.json({ status: 'ok', apiBaseUrl });
  });

  const resources: Array<[string, Model<unknown>]> = [
    ['/api/users/', User],
    ['/api/teams/', Team],
    ['/api/activities/', Activity],
    ['/api/leaderboard/', LeaderboardEntry],
    ['/api/workouts/', Workout],
  ];
  for (const [path, model] of resources) {
    app.use(path, createResourceRouter(model));
  }

  return app;
}

export async function startServer() {
  const app = createApp();
  await connectDatabase();
  console.log('Connected to octofit_db');
  return app.listen(port, () => {
    console.log(`OctoFit Tracker API listening on ${apiBaseUrl}`);
  });
}
