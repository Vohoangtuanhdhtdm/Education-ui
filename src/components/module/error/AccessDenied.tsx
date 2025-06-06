interface AccessDeniedProps {
  message?: string; // Cho phép truyền vào thông báo tùy chỉnh
}

export const AccessDenied = ({ message }: AccessDeniedProps) => (
  <div className="flex h-screen flex-col items-center justify-center bg-gray-50 text-center">
    <h1 className="text-4xl font-bold text-red-600">Truy cập bị từ chối</h1>
    <p className="mt-4 text-lg text-gray-700">
      {message || "Rất tiếc, bạn không có quyền hạn để xem trang này."}
    </p>
    <a
      href="/"
      className="mt-6 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
    >
      Quay về Trang chủ
    </a>
  </div>
);
