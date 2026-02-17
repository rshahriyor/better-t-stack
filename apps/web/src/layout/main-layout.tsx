import { Sidebar, Header } from "@/widgets";
import { Outlet } from "react-router";

export const MainLayout = () => {
    return (
        <main>
            <Header />
            <Sidebar />
            <div className="flex flex-col min-h-screen p-5 pb-2">
                <div className="flex flex-col gap-5 flex-1 pb-5">
                    {/* <Title /> */}
                    <Outlet />
                </div>
                {/* <Footer /> */}
            </div>
        </main>
    )
}
