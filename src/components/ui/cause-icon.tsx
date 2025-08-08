import React from 'react';

interface CauseIconProps {
  type: 'solidarity' | 'immigration' | 'environment' | 'womens-rights' | 'flood-relief' | 'state-violence' | 'poverty' | 'social-justice' | 'collective-action';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const CauseIcon: React.FC<CauseIconProps> = ({ type, size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  const baseClasses = `${sizeClasses[size]} flex items-center justify-center rounded-lg ${className}`;

  const iconConfigs = {
    solidarity: {
      bgClass: 'bg-gradient-to-br from-red-500 to-red-600',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-3/4 h-3/4 text-white">
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            fill="currentColor"
          />
        </svg>
      )
    },
    immigration: {
      bgClass: 'bg-gradient-to-br from-blue-500 to-blue-600',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-3/4 h-3/4 text-white">
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
            fill="currentColor"
          />
        </svg>
      )
    },
    environment: {
      bgClass: 'bg-gradient-to-br from-green-500 to-green-600',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-3/4 h-3/4 text-white">
          <path
            d="M17 8C8 10 5.9 16.17 3.82 21.34l1.06.54C6.16 17.4 7.68 14.21 12 14c3.95-.13 5.3-2.28 5.26-3.82-.01-.37-.07-.75-.22-1.09L17 8zM3.5 9.5c0 3.8 3.2 7 7 7s7-3.2 7-7h-2c0 2.8-2.2 5-5 5s-5-2.2-5-5H3.5z"
            fill="currentColor"
          />
        </svg>
      )
    },
    'womens-rights': {
      bgClass: 'bg-gradient-to-br from-purple-500 to-pink-500',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-3/4 h-3/4 text-white">
          <path
            d="M12 2c2.21 0 4 1.79 4 4 0 1.89-1.31 3.47-3.06 3.87L13 11h-2v-1.13C9.31 9.47 8 7.89 8 6c0-2.21 1.79-4 4-4zm0 7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
            fill="currentColor"
          />
          <path
            d="M12 12c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"
            fill="currentColor"
          />
        </svg>
      )
    },
    'flood-relief': {
      bgClass: 'bg-gradient-to-br from-cyan-500 to-blue-500',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-3/4 h-3/4 text-white">
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            fill="currentColor"
          />
        </svg>
      )
    },
    'state-violence': {
      bgClass: 'bg-gradient-to-br from-orange-500 to-red-500',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-3/4 h-3/4 text-white">
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
            fill="currentColor"
          />
        </svg>
      )
    },
    poverty: {
      bgClass: 'bg-gradient-to-br from-amber-600 to-orange-600',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-3/4 h-3/4 text-white">
          <path
            d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
            fill="currentColor"
          />
        </svg>
      )
    },
    'social-justice': {
      bgClass: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-3/4 h-3/4 text-white">
          <path
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      )
    },
    'collective-action': {
      bgClass: 'bg-gradient-to-br from-red-600 to-orange-600',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-3/4 h-3/4 text-white">
          <path
            d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 7.5h-1.08A1.5 1.5 0 0 0 16.04 8.37L13.5 16H16v6h4zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2.5 16v-7H6l1.54-4.63A1.5 1.5 0 0 1 9.96 9.5h1.08c.68 0 1.29.42 1.54 1.05L14 16h-1.5v7h-5z"
            fill="currentColor"
          />
        </svg>
      )
    }
  };

  const config = iconConfigs[type];
  
  return (
    <div className={`${baseClasses} ${config.bgClass} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
      {config.icon}
    </div>
  );
};
