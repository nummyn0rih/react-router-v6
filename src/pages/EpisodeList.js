import { lazy } from 'react';

const ComponentList = lazy(() => import('../components/ComponentList'));
const ErrorBoundary = lazy(() => import('../components/ErrorBoundary'));

export default function Episodes() {
  return (
    <ErrorBoundary>
      <ComponentList name='episodes' />;
    </ErrorBoundary>
  );
}
