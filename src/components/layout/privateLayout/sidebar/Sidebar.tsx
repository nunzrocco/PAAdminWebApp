import { SidebarItem } from "./SidebarItem";

export const Sidebar = () => {
    return (
        <aside className="bg-stone-800 w-1/5 h-screen text-stone-100 py-5">
            <ul>
                <SidebarItem text="Dashboard" active={true} />
                <SidebarItem text="Dashboard" active={false} />
                <SidebarItem text="Dashboard" active={false} />
            </ul>
        </aside>
    );
};