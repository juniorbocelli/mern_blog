import React from 'react';
import {
  Box,

  useTheme,
} from '@mui/material';

import BoxPage from '../../ui/pages/BoxPage';

import useStates from './states';

const Blog: React.FC<React.ReactFragment> = (props) => {
  const states = useStates();
  const theme = useTheme();
  
  const {
    isQueryingAPI,

    alertMessage,
    setAlertMessage,
  } = states;

  return (
    <BoxPage>
      Porra
    </BoxPage>
  );
};

export default Blog;