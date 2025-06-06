export const ROLES = {
  ADMIN: "admin",
  STUDENT: "student",
  TEACHER: "teacher",
  VIEWER: "viewer",
} as const; // `as const` để có type checking chặt chẽ hơn

export type AppRole = (typeof ROLES)[keyof typeof ROLES]; // Tạo type từ các keys của ROLES
