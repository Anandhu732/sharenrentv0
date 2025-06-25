
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import AuthModal from './AuthModal';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated, isAdmin } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(!isAuthenticated);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isAuthenticated && isAdmin && location.pathname === '/dashboard') {
      // Redirect admin users to admin dashboard instead of regular dashboard
      navigate('/admin');
    }
  }, [isAuthenticated, isAdmin, location.pathname, navigate]);

  if (!isAuthenticated) {
    return (
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        defaultMode="login"
      />
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
