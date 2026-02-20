import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/protected-route.tsx", [
    layout("layout/main-layout.tsx", [
      layout("routes/shared-role-route.tsx", [
        index("pages/_index.tsx"),
        route("about", "pages/about.tsx"),
      ]),
      layout("routes/admin-role-route.tsx", [
        route("settings", "pages/settings.tsx"),
        route("admin", "pages/admin.tsx")
      ]),
    ]),
  ]),
  route("login", "pages/login/login.tsx"),
] satisfies RouteConfig;