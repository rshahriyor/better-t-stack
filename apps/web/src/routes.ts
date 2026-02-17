import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout('layout/main-layout.tsx', [
        index("routes/_index.tsx"),
        route("about", "routes/about.tsx"),
        route("settings", "routes/settings.tsx"),
    ])
] satisfies RouteConfig;