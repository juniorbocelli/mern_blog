import React from 'react';
import {
  Container,
  Grid,

  useTheme,
} from '@mui/material';

import BoxPage from '../../ui/pages/BoxPage';
import Form from './components/Form';

import useStates from './states';

const Blog: React.FC<React.ReactFragment> = (props) => {
  const states = useStates();
  const theme = useTheme();

  return (
    <BoxPage>
      <Container>
        <Grid
          container
          alignItems="stretch"
          spacing={2}

          sx={{
            justifyContent: 'space-between'
          }}
        >
          <Grid item xs={12} sm={7}>
            <Form {...states} />
          </Grid>
          <Grid item xs={12} sm={4}>

          </Grid>
        </Grid>
      </Container>
    </BoxPage>
  );
};

export default Blog;