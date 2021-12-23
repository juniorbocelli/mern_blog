import React from 'react';

import {
  IsQueryingAPIState,
  AlertMessageState,
} from './types';

export interface IUseBoxPageStates {
  isQueryingAPI: IsQueryingAPIState;
  setIsQueryingAPI: React.Dispatch<React.SetStateAction<IsQueryingAPIState>>;

  alertMessage: AlertMessageState;
  setAlertMessage: React.Dispatch<React.SetStateAction<AlertMessageState>>;
};

export default function useBoxPageStates(): IUseBoxPageStates {
  const [isQueryingAPI, setIsQueryingAPI] = React.useState<IsQueryingAPIState>(false);
  const [alertMessage, setAlertMessage] = React.useState<AlertMessageState>(undefined);

  return {
    isQueryingAPI,
    setIsQueryingAPI,

    alertMessage,
    setAlertMessage,
  };
};