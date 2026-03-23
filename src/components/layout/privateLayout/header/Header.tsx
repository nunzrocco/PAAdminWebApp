import UserMenu from "./userMenu/UserMenu"
import { MASTER_NAVIGATION } from "../../../../constants/navigation"
import { NavLink } from "react-router-dom";


export const Header = () => {

    // dconst { user } = useAuth();

    const filteredNav = MASTER_NAVIGATION;

    return (
        <header className="bg-gray-200">
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-4">
                    <span className="text-lg font-bold">PichangApp</span>
                    <nav className="flex items-center bg-white rounded-lg overflow-hidden">
                        {
                            filteredNav.map((item) => (
                                <NavLink
                                    key={item.key}
                                    to={item.href}
                                    className={({ isActive }) => `
                                        flex items-center gap-3 px-4 py-2.5 transition-all duration-200 group
                                        ${isActive
                                            ? 'bg-green-700 text-white shadow-lg shadow-green-900/20'
                                            : 'hover:bg-green-600 hover:text-white'}
                                    `}
                                >
                                    {({ isActive }) => (
                                        <>
                                            <span className="text-sm font-semibold">{item.label}</span>
                                        </>
                                    )}
                                </NavLink>
                            ))
                        }
                    </nav>
                </div>
                <UserMenu />
            </div>
        </header>
    )
}