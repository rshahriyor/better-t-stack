import ProtectedRoute from "./protected-route";

const AdminRoleRoute = () => <ProtectedRoute allow={["admin"]} />;

export default AdminRoleRoute;