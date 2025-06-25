import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import AuthModal from './AuthModal';

const Hero = () => {
  const { isAuthenticated } = useAuth();
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; mode: 'login' | 'signup' }>({
    isOpen: false,
    mode: 'login'
  });

  const handleExploreClick = () => {
    if (isAuthenticated) {
      // User is authenticated, redirect to dashboard
      return;
    } else {
      // User is not authenticated, show login modal
      setAuthModal({ isOpen: true, mode: 'login' });
    }
  };

  const closeAuthModal = () => {
    setAuthModal({ isOpen: false, mode: 'login' });
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Why Buy When You Can{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Share?
              </span>
            </h1>
            
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Join thousands of Indians who are sharing, renting, and buying products sustainably. 
              Earn from your unused items and find amazing deals.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {isAuthenticated ? (
                <Button 
                  size="lg" 
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full text-lg group"
                  asChild
                >
                  <Link to="/dashboard">
                    Go to Dashboard
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              ) : (
                <Button 
                  size="lg" 
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full text-lg group"
                  onClick={handleExploreClick}
                >
                  Explore Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              )}
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-emerald-500 text-emerald-500 hover:bg-emerald-50 px-8 py-3 rounded-full text-lg"
                onClick={() => setAuthModal({ isOpen: true, mode: 'signup' })}
              >
                List a Product
              </Button>
            </div>
            
            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">1 Lakh+</div>
                <div className="text-sm text-gray-600">Active Users</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">5 Lakh+</div>
                <div className="text-sm text-gray-600">Listed Products</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">99%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=600&fit=crop"
                alt="Person using mobile for sharing products in India"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating cards with Indian products */}
            <div className="absolute -left-4 top-4 bg-white rounded-xl shadow-lg p-4 max-w-[200px] animate-float">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <span className="text-emerald-600 font-semibold">📱</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">iPhone 14</div>
                  <div className="text-xs text-gray-500">₹2,500/day</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -right-4 bottom-4 bg-white rounded-xl shadow-lg p-4 max-w-[200px] animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">🏏</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">Cricket Kit</div>
                  <div className="text-xs text-gray-500">₹800/day</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AuthModal
        isOpen={authModal.isOpen}
        onClose={closeAuthModal}
        defaultMode={authModal.mode}
      />
    </>
  );
};

export default Hero;
