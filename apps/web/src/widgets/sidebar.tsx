import type { IPage } from "@/core/models/page.model"
import { NavLink } from "react-router"

const sidebarData: IPage[] = [
    {
        label: 'Dashboard',
        icon: 'pi pi-home',
        route: '/'
    },
    {
        label: 'Products',
        icon: 'pi pi-briefcase',
        route: 'settings'
    }
]

export const Sidebar = () => {
    return (
        <aside>
            <ul>
                {sidebarData.map((page, index) => (
                    <li key={index}>
                        <NavLink to={page.route}>
                            {page.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </aside>
    )
}
