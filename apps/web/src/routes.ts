import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout('layout/main-layout.tsx', [
        index("pages/_index.tsx"),
        route("about", "pages/about.tsx"),
        route("settings", "pages/settings.tsx"),
    ]),
    route("login", 'pages/login/login.tsx')
] satisfies RouteConfig;