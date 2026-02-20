import type { IPage } from "@/core/models/page.model"
import { authClient } from "@/lib/auth-client"
import { NavLink } from "react-router"

const sidebarData: IPage[] = [
    {
        label: 'Dashboard',
        icon: 'pi pi-home',
        route: '/',
        role: ['admin', 'user']
    },
    {
        label: 'Products',
        icon: 'pi pi-briefcase',
        route: 'settings',
        role: ['admin']
    },
    {
        label: 'About',
        icon: 'pi pi-info',
        route: 'about',
        role: ['admin', 'user']
    },
    {
        label: 'Admin',
        icon: 'pi pi-admin',
        route: 'admin',
        role: ['admin']
    }
]

export const Sidebar = () => {
    const { data: session } = authClient.useSession();
    return (
        <aside>
            <ul>
                {sidebarData.map((page, index) => (
                    <li key={index}>
                        {page.role.includes(session?.user.role || '') &&
                            <NavLink to={page.route} className={({isActive}) => `${isActive ? 'text-(--primary-color)' : 'text-black'}`}>
                                {page.label}
                            </NavLink>
                        }
                    </li>
                ))}
            </ul>
        </aside>
    )
}