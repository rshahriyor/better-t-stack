import ProtectedRoute from "./protected-route";

const SharedRoleRoute = () => <ProtectedRoute allow={["user", "admin"]} />;

export default SharedRoleRoute;