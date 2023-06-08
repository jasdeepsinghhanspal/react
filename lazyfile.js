import React, { lazy, Suspense } from 'react';

// Define a higher-order function for lazy loading components
const lazyLoadComponent = (componentImport) => {
  const LazyComponent = lazy(componentImport);

  return (props) => (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

// Lazily load the components
const LazyComponent1 = lazyLoadComponent(() => import('./LazyComponent1'));
const LazyComponent2 = lazyLoadComponent(() => import('./LazyComponent2'));
const LazyComponent3 = lazyLoadComponent(() => import('./LazyComponent3'));

const App = () => (
  <div>
    <h1>Lazy Loading Example</h1>
    <LazyComponent1 />
    <LazyComponent2 />
    <LazyComponent3 />
  </div>
);

export default App;
