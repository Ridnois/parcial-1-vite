import ServiciosComponent from "components/Servicios";
import type { Route } from "../+types/root";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "C&G - Servicios" },
        { name: "description", content: "Ofrecemos un listado de geniales servicios para ti" },
    ];
}

export default function HomeComp() {
    return (
        <>
            <ServiciosComponent />
        </>
    )
}
