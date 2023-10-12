import { Navigate, useLocation } from 'react-router-dom';

function NavGuard({ children, isLoggedIn }) {
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}
export default NavGuard; 