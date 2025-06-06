import React from "react";
import { Link } from "@tanstack/react-router";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-900 to-teal-600 text-white p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold hover:text-blue-200 transition-colors"
        >
          TDMU Education
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-200 transition-colors">
            Trang Chủ
          </Link>
          <Link
            to="/managementTools"
            className="hover:text-blue-200 transition-colors"
          >
            Công Cụ
          </Link>
          <Link
            to="/home"
            className="bg-blue-600 px-3 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Đăng nhập
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
