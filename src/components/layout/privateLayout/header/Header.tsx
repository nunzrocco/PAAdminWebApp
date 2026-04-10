import UserMenu from "./userMenu/UserMenu";

export const Header = () => {

    return (
        <header className="bg-gray-200">
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-4">
                    <span className="text-lg font-bold">PichangApp</span>
                </div>
                <UserMenu />
            </div>
        </header>
    )
}