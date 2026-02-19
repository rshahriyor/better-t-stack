import { Navigate, Outlet } from "react-router";
import { authClient } from "@/lib/auth-client";

const ProtectedRoute = () => {
    const { data, isPending } = authClient.useSession();

    if (isPending) return <div>Loading...</div>;
    if (!data?.user) return <Navigate to="/login" replace />;
    return <Outlet />;
}

export default ProtectedRoute;