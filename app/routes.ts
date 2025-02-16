import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
    {
      path: "/",
      file: "routes/home.tsx"
    },
    {
      path: "/dashboard",
      file: "routes/dashboard.tsx"
    }
  ] satisfies RouteConfig;