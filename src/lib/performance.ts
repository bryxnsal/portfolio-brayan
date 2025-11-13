/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { lazy } from 'react';
import type { ComponentType } from 'react';

// Lazy load heavy components
export const lazyLoad = (importFunc: () => Promise<{ default: ComponentType<any> }>) => {
  return lazy(() =>
    importFunc().catch(() => {
      // Fallback component in case of loading error
      return { default: () => React.createElement('div', null, 'Error loading component') };
    })
  );
};

// Preload critical components
export const preloadComponent = (importFunc: () => Promise<{ default: ComponentType<any> }>) => {
  const link = document.createElement('link');
  link.rel = 'modulepreload';
  // This would need more sophisticated handling for dynamic imports
  return importFunc;
};