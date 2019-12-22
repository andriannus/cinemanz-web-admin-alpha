import React from 'react';

import MainRoutes from 'pages/main.routes';
import Navigation from 'shared/components/navigation';

const Main = () => {
  return (
    <>
      <Navigation />

      <MainRoutes />
    </>
  );
};

export default Main;
