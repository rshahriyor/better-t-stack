import { Navigate, Outlet } from "react-router";
import { authClient } from "@/lib/auth-client";

interface RoleRouteProps {
    allow: string[];
};

const ProtectedRoute = ({ allow }: RoleRouteProps) => {
    const { data, isPending } = authClient.useSession();

    if (isPending) return <div>Loading...</div>;

    if (!data?.user) return <Navigate to="/login" replace />;

    const role = data.user.role ?? "user";
    if (allow && !allow.includes(role)) return <Navigate to="/*" replace />;

    return <Outlet />;
}

export default ProtectedRoute;