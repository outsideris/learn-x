import { RouteConfig } from "$fresh/runtime.ts";

export const config: RouteConfig = {
  routeOverride: "/x/:module@:version/:path*",
};