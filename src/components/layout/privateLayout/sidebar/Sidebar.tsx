import { menuConfig } from "@/features/auth/navigation/menu.config";
import { filterMenuByRoles } from "@/features/auth/navigation/menu.util";
import { useAuthStore } from "@/features/auth/stores/AuthStore";
import { SidebarItem } from "./SidebarItem";

export const Sidebar = () => {
    const roles = useAuthStore((s) => s.user?.roles ?? [])
    

    const filteredMenu = filterMenuByRoles(menuConfig, roles)
    return (
            <aside className="bg-stone-800 w-1/5 h-screen text-stone-100 py-5 px-4">
                <ul>
                    {filteredMenu.map((item) => {
                        return (
                            <SidebarItem key={item.label} item={item} />
                        );
                    })}
                </ul>
            </aside>
    );
};