
import React from 'react';

export function ImageLoading() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-space-dark-blue/30 backdrop-blur-sm">
      <div className="w-6 h-6 border-2 border-space-accent/30 border-t-space-accent rounded-full animate-spin"></div>
      <span className="text-xs text-space-accent mt-2">Loading...</span>
    </div>
  );
}
