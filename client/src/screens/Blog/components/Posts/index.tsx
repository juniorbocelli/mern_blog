import React from "react";
import {
  Grid,

  useTheme,
} from '@mui/material';

import BlogPost from '../BlogPost';

import { IUseStates } from "../../states";

const Posts: React.FC<IUseStates> = (states) => {
  const theme = useTheme();

  const {
    postsList
  } = states;

  return (
    <Grid
      sx={
        {
          "& .MuiTextField-root": {
            margin: theme.spacing(1),
          },
        }
      }
      container
      alignItems="stretch"
      spacing={4}
    >
      {postsList.map((post) => (
        <Grid key={post.id} item xs={12} sm={12}>
          <BlogPost post={post} states={states} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;