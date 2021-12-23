import React, { ReactNode } from "react";
import {
  Container,
  Box,
  SxProps,

  useTheme,
} from '@mui/material';

import Navbar from "../../../components/Navbar";
import BackDrop from "../../components/BackDrop";
import AlertDialog from "../../components/AlertDialog";

import { IUseBoxPageStates } from "./states";

interface IBoxPageProps {
  clhildren?: ReactNode;
  states?: IUseBoxPageStates;

  sx?: SxProps,
};

const BoxPage: React.FC<IBoxPageProps> = (props) => {
  const theme = useTheme();
  const {
    children,
    states,

    sx,
  } = props;

  const _onClose = () => {
    if (typeof (states?.setAlertMessage) !== "undefined")
      states.setAlertMessage(undefined);
  };

  return (
    <Container maxWidth="xl">
      {
        states?.alertMessage &&
        <AlertDialog
          open={typeof (states.alertMessage) !== 'undefined'}
          title={states.alertMessage.title}
          content={states.alertMessage.message}
          onClose={_onClose}
        />
      }

      {
        states?.isQueryingAPI &&
        <BackDrop open={states.isQueryingAPI} />
      }

      <Navbar />

      <Box sx={{ flexGrow: 1, mb: theme.spacing(0.5), ...sx }}>
        {children}
      </Box>

    </Container>
  );
};

export default BoxPage;