import React from 'react';

interface SolidarityIconProps {
  type: 'fist' | 'heart' | 'hands' | 'building' | 'people' | 'shield' | 'home';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  color?: 'red' | 'orange' | 'white' | 'gray';
}

export const SolidarityIcon: React.FC<SolidarityIconProps> = ({ 
  type, 
  size = 'md', 
  className = '',
  color = 'red'
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
    '2xl': 'w-16 h-16'
  };

  const colorClasses = {
    red: 'text-red-600',
    orange: 'text-orange-600',
    white: 'text-white',
    gray: 'text-gray-600'
  };

  const iconClass = `${sizeClasses[size]} ${colorClasses[color]} ${className}`;

  const icons = {
    fist: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
        <path d="M7 24h2V12H7v12zm4 0h2V12h-2v12zm-8-2h2v-8H3v8zm16 2h2V12h-2v12zm-4-2h2v-8h-2v8zM9 10V8c0-.55-.45-1-1-1s-1 .45-1 1v2H5V6c0-1.1.9-2 2-2s2 .9 2 2v4h2zm4 0V6c0-1.1.9-2 2-2s2 .9 2 2v4h2V8c0-.55-.45-1-1-1s-1 .45-1 1v2h-4zm-6-8c0-1.1.9-2 2-2s2 .9 2 2H9zm6 0c0-1.1.9-2 2-2s2 .9 2 2h-2z"/>
      </svg>
    ),
    heart: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    ),
    hands: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
        <path d="M13 1.07V9h7c0-4.08-3.05-7.44-7-7.93zM4 15c0 4.42 3.58 8 8 8s8-3.58 8-8v-4H4v4zm7-13.93C7.05 1.56 4 4.92 4 9h7V1.07z"/>
      </svg>
    ),
    building: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
      </svg>
    ),
    people: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
        <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 7.5h-1.08A1.5 1.5 0 0 0 16.04 8.37L13.5 16H16v6h4zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2.5 16v-7H6l1.54-4.63A1.5 1.5 0 0 1 9.96 9.5h1.08c.68 0 1.29.42 1.54 1.05L14 16h-1.5v7h-5z"/>
      </svg>
    ),
    shield: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
      </svg>
    ),
    home: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
      </svg>
    )
  };

  return icons[type];
};
