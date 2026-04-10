// components/sidebar/SidebarItem.tsx
import type { MenuItem } from "@/features/auth/navigation/menu.config"
import { Link, useMatchRoute } from "@tanstack/react-router"

type Props = {
  item: MenuItem
}

export function SidebarItem({ item }: Props) {

    const matchRoute = useMatchRoute()

    const isActive = item.to
    ? matchRoute({ to: item.to, fuzzy: false })
    : false

  return (
    <div className="mb-1">
      {item.to ? (
        <Link
          to={item.to}
          className={`block px-6 py-2 rounded-lg hover:bg-stone-200 hover:text-stone-800 hover:scale-105 transition-all ease-in-out duration-300 ${
            isActive ? "bg-stone-600 text-white" : ""
          }`}
        >
          {item.label}
        </Link>
      ) : (
        <div className="px-6 py-2 text-xs font-light text-stone-300">
          {item.label}
        </div>
      )}

      {item.children && (
        <div>
          {item.children.map((child) => (
            <SidebarItem
              key={child.label}
              item={child}
            />
          ))}
        </div>
      )}
      
    </div>
  )
}