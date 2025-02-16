import type { Route } from "./+types/dashboard";
import { Dashboard } from "../components/dashboard/dashboard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard - Portfolio" },
    { name: "description", content: "About me" },
  ];
}

export default function DashboardPage() {
  return <Dashboard />;
}