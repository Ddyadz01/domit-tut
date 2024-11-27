import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { CenterContent } from './_components/IndexComponents';
import NotFound from './_pages/404/NotFound';

const PrivateRoutes = ({ user, children }) => {
  if (!user.token) {
    return (
      <Routes>
        <Route path={'*'} exact element={<NotFound />} />
      </Routes>
    );
  }
  return children;
};

export default PrivateRoutes;
