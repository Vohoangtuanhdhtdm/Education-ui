import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-teal-600 text-white py-8">
      {" "}
      <div className="container mx-auto text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} TDMU Education. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-gray-400">
            Chính sách bảo mật
          </a>
          <a href="#" className="hover:text-gray-400">
            Điều khoản dịch vụ
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
