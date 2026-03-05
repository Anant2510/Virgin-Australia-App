import express, { Request, Response } from 'express';
import * as functions from 'firebase-functions';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from TypeScript Functions!');
});

export const api = functions.https.onRequest(app);