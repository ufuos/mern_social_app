
import { User, Home, LogIn, UserPlus } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home", icon: <Home size={18} /> },
  { to: "/profile", label: "Profile", icon: <User size={18} /> },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="w-full border-b border-border bg-white flex items-center justify-between px-8 py-3 shadow-sm z-20">
      <div className="flex items-center gap-2">
        <span className="font-bold text-2xl text-blue-600 tracking-wide">SocialConnect</span>
      </div>
      <div className="flex items-center gap-8">
        {navLinks.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`flex items-center gap-1 px-3 py-2 font-medium rounded-md hover:bg-blue-50 transition-colors ${
              location.pathname === item.to ? "text-blue-600" : "text-gray-700"
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <Link
          to="/signin"
          className="flex items-center gap-1 px-3 py-2 rounded-md hover:bg-blue-100 text-blue-600 transition-colors font-semibold"
        >
          <LogIn size={17} />
          Sign In
        </Link>
        <Link
          to="/signup"
          className="flex items-center gap-1 px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors font-semibold"
        >
          <UserPlus size={17} />
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
