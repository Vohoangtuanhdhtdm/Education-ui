import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ROLES } from "@/type/constants/roles";
import { useAuthorization } from "@/hooks/useAuthorization";

export const RootLayout = () => {
  const { hasRole } = useAuthorization();
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo và các link điều hướng */}
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-xl font-bold text-gray-800">
                Logo
              </Link>
              <div className="hidden md:flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                  activeProps={{ className: "text-indigo-600 bg-indigo-50" }}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                  activeProps={{ className: "text-indigo-600 bg-indigo-50" }}
                >
                  Test SSE
                </Link>
                {hasRole(ROLES.TEACHER) && (
                  <Link
                    to="/teacher/dashboard"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                    activeProps={{ className: "text-indigo-600 bg-indigo-50" }}
                  >
                    Trang dành cho giáo viên
                  </Link>
                )}
              </div>
            </div>

            {/* Nút xác thực người dùng */}
            <div className="flex items-center">
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all">
                    Đăng nhập
                  </button>
                </SignInButton>
              </SignedOut>
            </div>
          </div>
        </nav>
      </header>

      {/* Vùng nội dung chính của trang */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      {/* Devtools chỉ hiển thị khi phát triển */}
      <TanStackRouterDevtools position="bottom-right" />
    </div>
  );
};
