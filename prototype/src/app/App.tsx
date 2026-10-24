import { RouterProvider } from "react-router";
import { router } from "./routes";

export default function App() {
  return (
    <div className="h-full bg-[#f6f8f7]">
      <RouterProvider router={router} />
    </div>
  );
}
