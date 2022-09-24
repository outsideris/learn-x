import { createRequire } from "https://deno.land/std@0.157.0/node/module.ts";

const require = createRequire(import.meta.url);

const http = require('http');

const server = http.createServer((req, res) => {
  res.end('hello world');
});

server.listen(8000);
