import { Navigate, Outlet } from "react-router-dom";
import Dashboard from "../../Dashboard/MainDashboard/Dashboard";


const PrivateRoute = () => {
    const token = localStorage.getItem("token"); // Check for authentication token

    return token ? (
        <Dashboard> 
            <Outlet /> {/* This will render the child routes inside Dashboard */}
        </Dashboard>
    ) : (
        <Navigate to="/login" replace />
    );
};

export default PrivateRoute;
