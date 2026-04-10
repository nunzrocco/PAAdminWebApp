// features/navigation/menu.utils.ts
import type { MenuItem } from "./menu.config"
import type { UserRole } from "../stores/AuthStore"

export function filterMenuByRoles(
  items: MenuItem[],
  userRoles: UserRole[]
): MenuItem[] {
  return items
    .filter((item) => {
      if (!item.roles) return true
      return item.roles.some((r) => userRoles.includes(r))
    })
    .map((item) => ({
      ...item,
      children: item.children
        ? filterMenuByRoles(item.children, userRoles)
        : undefined,
    }))
    .filter((item) => {
      // remove parent without children
      if (item.children && item.children.length === 0 && !item.to) {
        return false
      }
      return true
    })
}