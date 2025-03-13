import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"), route("layouts/2x2", "./routes/layouts/2x2.tsx"),] satisfies RouteConfig;
