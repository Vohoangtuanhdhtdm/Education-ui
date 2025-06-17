// src/components/teacher-sidebar.tsx
import { Link, useLocation } from "@tanstack/react-router";
import { Home, Wrench } from "lucide-react"; // Hoặc dùng Heroicons nếu muốn

import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/teacher", label: "Dashboard", icon: Home },
  { href: "/teacher/class", label: "Quản lý Lớp học", icon: Wrench },
  { href: "/teacher/student", label: "Quản lý Học sinh", icon: Wrench },
  { href: "/teacher/tools/tools", label: "Công cụ AI", icon: Wrench },
];

export function TeacherSidebar() {
  const { pathname } = useLocation();

  return (
    <aside className="hidden w-64 flex-col border-r bg-background p-4 md:flex">
      <nav className="flex flex-col gap-2">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
          Giảng viên
        </h2>

        {navLinks.map((link) => (
          <Button
            key={link.href}
            asChild
            variant={pathname === link.href ? "secondary" : "ghost"}
            className="justify-start"
          >
            <Link to={link.href}>
              <link.icon className="mr-2 h-4 w-4" />
              {link.label}
            </Link>
          </Button>
        ))}
      </nav>
    </aside>
  );
}
