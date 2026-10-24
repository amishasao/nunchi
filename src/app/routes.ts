import { createBrowserRouter } from "react-router";
import { AppLayout } from "./components/AppLayout";
import { HomeScreen } from "./components/HomeScreen";
import { StartActivityScreen } from "./components/StartActivityScreen";
import { HeatmapScreen } from "./components/HeatmapScreen";
import { HeatmapLiveScreen } from "./components/HeatmapLiveScreen";
import { ProfileScreen } from "./components/ProfileScreen";
import { RateInteractionScreen } from "./components/RateInteractionScreen";
import { SplashScreen } from "./components/SplashScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: SplashScreen,
  },
  {
    path: "/home",
    Component: AppLayout,
    children: [
      { index: true, Component: HomeScreen },
      { path: "activity", Component: StartActivityScreen },
      { path: "heatmap", Component: HeatmapScreen },
      { path: "heatmap/live", Component: HeatmapLiveScreen },
      { path: "profile", Component: ProfileScreen },
      { path: "rate", Component: RateInteractionScreen },
    ],
  },
]);