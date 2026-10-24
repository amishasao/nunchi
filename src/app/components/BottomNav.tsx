import { useNavigate, useLocation } from "react-router";
import svgPaths from "../../imports/svg-0klmqxl6ml";

interface NavItem {
  label: string;
  path: string;
}

function HomeIcon({ active }: { active: boolean }) {
  return (
    <svg width="28" height="28" viewBox="0 0 33 33" fill="none">
      <mask
        id="mask_home"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
        width="33"
        height="33"
        x="0"
        y="0"
      >
        <rect fill="#D9D9D9" height="33" width="33" />
      </mask>
      <g mask="url(#mask_home)">
        <path
          d={svgPaths.p245c0000}
          fill={active ? "#2e3a3f" : "#767676"}
        />
      </g>
    </svg>
  );
}

function HeatIcon({ active }: { active: boolean }) {
  return (
    <svg width="28" height="28" viewBox="0 0 33 33" fill="none">
      <mask
        id="mask_heat"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
        width="33"
        height="33"
        x="0"
        y="0"
      >
        <rect fill="#D9D9D9" height="33" width="33" />
      </mask>
      <g mask="url(#mask_heat)">
        <path
          d={svgPaths.pe398c80}
          fill={active ? "#2e3a3f" : "#767676"}
        />
      </g>
    </svg>
  );
}

function ActivityIcon({ active }: { active: boolean }) {
  return (
    <svg width="28" height="28" viewBox="0 0 33 33" fill="none">
      <mask
        id="mask_activity"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
        width="33"
        height="33"
        x="0"
        y="0"
      >
        <rect fill="#D9D9D9" height="33" width="33" />
      </mask>
      <g mask="url(#mask_activity)">
        <path
          d={svgPaths.pf6b9b80}
          fill={active ? "#2e3a3f" : "#767676"}
        />
      </g>
    </svg>
  );
}

function ProfileIcon({ active }: { active: boolean }) {
  return (
    <svg width="28" height="28" viewBox="0 0 27 27" fill="none">
      <path
        d={svgPaths.p27132f00}
        fill={active ? "#2e3a3f" : "#767676"}
      />
    </svg>
  );
}

export function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems: NavItem[] = [
    { label: "Home", path: "/home" },
    { label: "Heat", path: "/home/heatmap" },
    { label: "Activity", path: "/home/activity" },
    { label: "John", path: "/home/profile" },
  ];

  const renderIcon = (label: string, active: boolean) => {
    switch (label) {
      case "Home":
        return <HomeIcon active={active} />;
      case "Heat":
        return <HeatIcon active={active} />;
      case "Activity":
        return <ActivityIcon active={active} />;
      case "John":
        return <ProfileIcon active={active} />;
      default:
        return null;
    }
  };

  return (
    <nav className="flex items-center justify-around border-t border-[#d8e1e3] bg-white px-2 pb-6 pt-2">
      {navItems.map((item) => {
        const isActive =
          location.pathname === item.path ||
          (item.path === "/home/heatmap" && location.pathname === "/home/heatmap/live");
        return (
          <button
            key={item.label}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center gap-0.5 transition-colors ${
              isActive ? "text-[#2e3a3f]" : "text-[#767676]"
            }`}
          >
            {renderIcon(item.label, isActive)}
            <span
              className="font-['Inter',sans-serif]"
              style={{
                fontSize: "11px",
                fontWeight: isActive ? 600 : 500,
                color: isActive ? "#2e3a3f" : "#767676",
              }}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}