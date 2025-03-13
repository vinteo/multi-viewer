import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Multi Viewer" },
    { name: "description", content: "Multi Viewer" },
  ];
}

export default function Home() {
  return <Welcome />;
}
