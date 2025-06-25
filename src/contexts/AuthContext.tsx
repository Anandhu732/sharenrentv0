
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'user' | 'admin';
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  loginAsAdmin: () => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // Mock login - in real app, this would make API call
    console.log('Login attempt:', { email, password });

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock successful login
    const mockUser: User = {
      id: '1',
      name: 'Amit Sharma',
      email: email,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      role: 'user'
    };

    setUser(mockUser);
  };

  const signup = async (name: string, email: string, password: string) => {
    // Mock signup - in real app, this would make API call
    console.log('Signup attempt:', { name, email, password });

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock successful signup
    const mockUser: User = {
      id: '1',
      name: name,
      email: email,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      role: 'user'
    };

    setUser(mockUser);
  };

  const loginAsAdmin = async () => {
    // Mock admin login
    console.log('Demo admin login');

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock admin user
    const adminUser: User = {
      id: 'admin-1',
      name: 'Admin User',
      email: 'admin@sharenrent.com',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      role: 'admin'
    };

    setUser(adminUser);
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin',
    login,
    signup,
    loginAsAdmin,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
