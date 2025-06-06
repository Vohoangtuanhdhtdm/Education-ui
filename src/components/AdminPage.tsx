// // App.tsx hoặc route cụ thể
// import { RoleProtectedRoute } from "./RoleProtectedRoute";
// import { ROLES } from "../hooks/useAuthorization"; // Hoặc từ constants/roles.ts

// function AdminPage() {
//   return (
//     <RoleProtectedRoute allowedRoles={[ROLES.ADMIN]}>
//       <div>Chào admin!</div>
//     </RoleProtectedRoute>
//   );
// }

// function EditorOrAdminPage() {
//   return (
//     <RoleProtectedRoute allowedRoles={[ROLES.ADMIN, ROLES.EDITOR]}>
//       <div>Chào admin hoặc editor!</div>
//     </RoleProtectedRoute>
//   );
// }
