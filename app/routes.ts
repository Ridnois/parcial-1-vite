import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("servicios", "./routes/servicios.tsx"),
    route("contacto", "./routes/contacto.tsx"),
    route("quienes-somos", "./routes/quienes-somos.tsx"),
] satisfies RouteConfig;
