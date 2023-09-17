import { lazy } from 'react';

const ComponentList = lazy(() => import('../components/ComponentList'));
const ErrorBoundary = lazy(() => import('../components/ErrorBoundary'));

export default function Characters() {
  return (
    <ErrorBoundary>
      <ComponentList name='characters' />;
    </ErrorBoundary>
  );
}
