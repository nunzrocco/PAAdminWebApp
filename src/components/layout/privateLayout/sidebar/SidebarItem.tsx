interface SidebarItemProps {
    text: string,
    active: boolean,
    onClick?: () => {}
}

export const SidebarItem = ({ text, active, onClick }: SidebarItemProps) => {
    let classes = 'w-full text-right px-4 py-2 rounded-l-md transition-colors duration-300 ease-in-out'

    if (active) {
        classes += " bg-stone-100 text-stone-900"
    }
    else {
        classes += " cursor-pointer hover:bg-stone-700 my-2"
    }

    console.log(classes)

    return (<li className="pl-2">
        {
            active && (
                <div className="bg-stone-100">
                    <div className="bg-stone-800 h-2 rounded-br-md">

                    </div>
                </div>
            )
        }
        <button type="button" onClick={onClick} className={`${classes}`}>
            {text}
        </button>
        {
            active && (
                <div className="bg-stone-100">
                    <div className="bg-stone-800 h-2 rounded-tr-md">

                    </div>
                </div>
            )
        }
    </li>)
}