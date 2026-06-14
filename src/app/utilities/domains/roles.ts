// Espejo de backend_visionweb/src/middleware/seguridad/seguridad/helpers/rol.helper.ts
export const ROLES = {
    ADMINISTRADOR: "administradores",
    SUPERVISOR: "supervisores",
    CLIENTE: "clientes",
} as const;

export type RolNombre = typeof ROLES[keyof typeof ROLES];
