// http-server.ts
import { serve } from "http/server.ts";

function handler(req: Request): Response {
  return new Response("Hello, World!");
}

serve(handler);
