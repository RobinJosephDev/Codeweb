import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const HomePage = lazy(() => import('./pages/HomePage'));

const AppRoutes: React.FC = () => (
  <UserProvider>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={
              <HomePage />
          }
        />

      </Routes>
    </Suspense>
  </UserProvider>
);

export default AppRoutes;
