export const ROLES = {
  ADMIN: "admin",
  EDITOR: "editor",
  VIEWER: "viewer",
} as const; // `as const` để có type checking chặt chẽ hơn

export type AppRole = (typeof ROLES)[keyof typeof ROLES]; // Tạo type từ các keys của ROLES
