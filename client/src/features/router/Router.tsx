import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import * as GlobalRoutes from '../../globals/routes';

import Blog from '../../screens/Blog';

const MainRoutes = React.memo((props) => {
  return (
    <Routes>
      <Route path={GlobalRoutes.SCREEN_BLOG} element={<Blog />} />
      <Route path='*' element={<Navigate to={GlobalRoutes.SCREEN_BLOG} replace />} />
    </Routes>
  );
});

const Router = () => {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
};

export default Router;