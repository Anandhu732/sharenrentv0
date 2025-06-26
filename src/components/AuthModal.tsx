import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/AuthContext';
import { Eye, EyeOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import clsx from 'clsx';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: 'login' | 'signup';
}

const AuthModal = ({ isOpen, onClose, defaultMode = 'signup' }: AuthModalProps) => {
  const [mode, setMode] = useState<'login' | 'signup'>(defaultMode);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const { login, signup } = useAuth();
  const { toast } = useToast();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (mode === 'login') {
        await login(formData.email, formData.password);
        toast({ title: 'Welcome back!', description: 'Logged in successfully.' });
      } else {
        await signup(formData.name, formData.email, formData.password);
        toast({ title: 'Account created!', description: 'Welcome aboard.' });
      }
      onClose();
    } catch (err) {
      toast({ title: 'Authentication failed', description: 'Try again.', variant: 'destructive' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl h-[500px] rounded-xl overflow-hidden shadow-lg bg-white">
        <div
          className={clsx(
            'absolute w-1/2 h-full transition-transform duration-700 ease-in-out z-20 rounded-xl text-white p-10 flex flex-col items-center justify-center',
            mode === 'signup' ? 'translate-x-0 bg-gradient-to-br from-emerald-400 to-green-600 left-0' : 'translate-x-full bg-gradient-to-br from-emerald-400 to-green-600 right-0'
          )}
        >
          <h2 className="text-3xl font-bold mb-2">
            {mode === 'signup' ? 'Welcome Back!' : 'Hello, Friend!'}
          </h2>
          <p className="text-sm mb-6 text-center">
            {mode === 'signup'
              ? 'To keep connected with us please login with your personal info'
              : 'Enter your personal details and start your journey with us'}
          </p>
          <Button
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-emerald-600"
            onClick={() => setMode(mode === 'signup' ? 'login' : 'signup')}
          >
            {mode === 'signup' ? 'SIGN IN' : 'SIGN UP'}
          </Button>
        </div>

        <div className={clsx(
          'absolute top-0 h-full w-1/2 p-10 transition-all duration-700 ease-in-out bg-white z-10 flex flex-col justify-center',
          mode === 'signup' ? 'right-0' : 'left-0'
        )}>
          <h2 className="text-3xl font-bold text-emerald-600 mb-4">
            {mode === 'signup' ? 'Create Account' : 'Sign In'}
          </h2>

          <div className="flex gap-4 justify-center mb-4">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700">f</div>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700">G+</div>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700">in</div>
          </div>

          <p className="text-sm text-center text-gray-400 mb-6">
            or use your email for registration:
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'signup' && (
              <Input
                name="name"
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            )}

            <Input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <div className="relative">
              <Input
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </Button>
            </div>

            <Button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white"
              disabled={isLoading}
            >
              {isLoading ? 'Please wait...' : mode === 'signup' ? 'SIGN UP' : 'SIGN IN'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;