
import { User } from 'lucide-react';

interface DefaultAvatarProps {
  name?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const DefaultAvatar = ({ name, size = 'md', className = '' }: DefaultAvatarProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-12 h-12 text-sm',
    lg: 'w-16 h-16 text-base',
    xl: 'w-24 h-24 text-xl'
  };

  const getInitials = (name?: string) => {
    if (!name) return '';
    const parts = name.split(' ');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return name[0]?.toUpperCase() || '';
  };

  const initials = getInitials(name);

  return (
    <div className={`${sizeClasses[size]} ${className} bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold shadow-lg`}>
      {initials || <User className="w-1/2 h-1/2" />}
    </div>
  );
};

export default DefaultAvatar;
