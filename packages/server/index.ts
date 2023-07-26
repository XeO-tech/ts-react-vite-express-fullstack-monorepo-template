import express from 'express';
import path from 'node:path';

const port = Number(process.env.SERVER_PORT);
const isDev = process.env.NODE_ENV === 'development';

async function startServer() {
  const app = express();

  // Serving API
  app.get('/test', async (_, res) => {
    res.json({ result: 'OK' });
  });

  // Serving react app
  let indexPath: string | undefined;
  if (!isDev) {
    indexPath = path.join(__dirname, '../../client/dist');
    app.use(`/`, express.static(indexPath!));
  }

  app.listen(port, () => {
    console.log(`🎸 Server is listening on port: ${port}`);
  });
}

startServer();
