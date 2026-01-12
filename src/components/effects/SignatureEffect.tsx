import React from 'react';

interface SignatureEffectProps {
  effect: 'glitch' | 'outline';
  children: React.ReactNode;
  className?: string;
}

export const SignatureEffect: React.FC<SignatureEffectProps> = ({ effect, children, className = '' }) => {
  if (effect === 'outline') {
    return (
      <span className={`text-outline ${className}`}>
        {children}
      </span>
    );
  }

  if (effect === 'glitch') {
    return (
      <div className={`glitch-hover inline-block ${className}`}>
        {children}
      </div>
    );
  }

  return <>{children}</>;
};
