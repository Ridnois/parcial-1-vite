import HomeComponent from "components/Home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "C&G - Inicio" },
    { name: "description", content: "Pagina de inicio C & G" },
  ];
}

export default function HomeComp() {
  return <HomeComponent />
}
