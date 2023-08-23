import { createBrowserRouter } from "react-router-dom";
import { ResultsSummary } from "@/components/resultsSummary/ResultsSummary";
import { Home } from "@/Home.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/summaryresults",
    element: <ResultsSummary />,
  },
]);
