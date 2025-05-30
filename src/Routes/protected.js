// components/ProtectedRoute.jsx
import { Navigate ,Outlet} from 'react-router-dom';

const ProtectedRoute = () => {
    const isAuthenticated = !!localStorage.getItem('access'); 
    return isAuthenticated ? <Outlet /> : <Navigate to="/signin" replace />;
  };
export default ProtectedRoute;
