import HomeComponent from "components/Home";
import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "C&G - Inicio" },
    { name: "description", content: "Pagina de inicio C & G" },
  ];
}

export default function HomePage() {
  return <HomeComponent />
}
