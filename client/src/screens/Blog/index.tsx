import React from 'react';
import {
  Container,
  Grid,

  useTheme,
} from '@mui/material';

import BoxPage from '../../ui/pages/BoxPage';
import Form from './components/Form';
import Posts from './components/Posts';

import useStates from './states';
import useAPIs from './apis';
import useEffects from './effects';

const Blog: React.FC<React.ReactFragment> = (props) => {
  const states = useStates();
  const apis = useAPIs(states);
  const effects = useEffects(apis);
  const theme = useTheme();

  // Add effects
  effects.useComponentDidMount();
  effects.usePostIdWasChanged(states.postId);

  return (
    <BoxPage states={states}>
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
            <Posts {...states} />
          </Grid>
        </Grid>
      </Container>
    </BoxPage>
  );
};

export default Blog;