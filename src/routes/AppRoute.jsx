import React from 'react';
import { Route, Routes } from 'react-router';

import PrivateRoutes from './PrivateRoutes';

const AppRoute = ({ routes, user }) => {
  return (
    <Routes>
      {routes.map((route) =>
        route.type === 'public' ? (
          <Route key={route.id} path={route.path} element={route.element} />
        ) : (
          <Route
            key={route.id}
            path={route.path}
            element={<PrivateRoutes user={user}>{route.element}</PrivateRoutes>}
          />
        ),
      )}
    </Routes>
  );
};

export default AppRoute;
