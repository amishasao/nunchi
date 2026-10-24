import { Outlet } from "react-router";
import { BottomNav } from "./BottomNav";

export function AppLayout() {
  return (
    <div className="flex flex-col h-full max-w-[430px] mx-auto bg-white relative overflow-hidden">
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <Outlet />
      </div>
      <BottomNav />
    </div>
  );
}
