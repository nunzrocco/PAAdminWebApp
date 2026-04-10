import type { UserRole } from "../stores/AuthStore";

export type MenuItem = {
    label: string;
    to?: string;
    roles: UserRole[];
    children?: MenuItem[];
}

export const menuConfig: MenuItem[] = [
    {
        label: "Dashboard",
        to: "/dashboard",
        roles: ["SUPER_ADMIN", "SALES", "ADMIN"],
    },
    {
        label: "Socios",
        roles: ["SUPER_ADMIN", "SALES", "ADMIN"],
        children: [
            {
                label: "Franquicias",
                to: "/franchise-groups",
                roles: ["SUPER_ADMIN", "SALES", "ADMIN"],
            },
            {
                label: "Socios",
                to: "/partners",
                roles: ["SUPER_ADMIN", "SALES", "ADMIN"],
            }
        ]
    },
    {
        label: "Usuarios",
        to: "/_private/users",
        roles: ["SUPER_ADMIN", "ADMIN"],
    }
]