import type { Route } from "./+types/home";
import { Welcome } from "../components/welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Jose Espinoza Dev" },
    { name: "description", content: "Welcome to my Portfolio!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
