import React from 'react';
import {
  AppBar,
  Typography,

  useTheme,
} from '@mui/material';

import blogLogo from '../../assets/images/blogLogo.gif';

const Navbar: React.FC<React.ReactFragment> = (props) => {
  const theme = useTheme();

  return (
    <AppBar
      sx={
        {
          borderRadius: 10,
          m: theme.spacing(2),
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }
      }
      position="static"
      color="inherit"
    >
      <img
        style={
          {
            marginRight: "25px",
          }
        }
        src={blogLogo}
        alt="icon"
        height="100"
      />
      <Typography
        sx={
          {
            color: "#8661d1",
            fontFamily: "Poppins",
            fontStyle: "bold",
          }
        }
        variant="h2"
        align="center"
      >
        Mern awesome blog
      </Typography>
    </AppBar>
  );
};

export default Navbar;