import express from 'express';

const app = express();
const version = process.env.APP_VERSION ?? 'development';

app.get('/', (_request, response) => {
  response.type('html').send(`
    <h1>CI/CD Lab</h1>
    <p>Preview deployment</p> 
    <p>Verified by GitHub Actions. Deployed on Render.</p>
    <p>The application is running.</p>

    <p>Version ${version}</p>
  `);
});

app.get('/api/health', (_request, response) => {
  response.json({
    status: 'ok',
  });
});

app.get('/api/version', (_request, response) => {
  response.json({
    version: version,
  });
});

export default app;