/* eslint-disable prettier/prettier */
import path from 'path';
import express from 'express';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const port = process.env.PORT || 5173;

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      let template = await readFile(path.resolve(__dirname, 'index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, template);

      const [startHTML, endHTML] =  template.split(`<!--ssr-outlet-->`);

      const { render } = await vite.ssrLoadModule('./src/entry-server.tsx');

      res.write(startHTML);
      const { stream, injectPreload }  = await render(url, {
        onShellReady() {
          stream.pipe(res);
        },
        onAllReady() {
          const preloadEndHTML = endHTML.replace('<!--preload-->', injectPreload());
            res.write(preloadEndHTML);
            res.end();
        },
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        vite.ssrFixStacktrace(e);
        next(e);
      }
    }
  });
  console.log(`Server is running on http://localhost:${port}/`);
  app.listen(port);
}

createServer();
