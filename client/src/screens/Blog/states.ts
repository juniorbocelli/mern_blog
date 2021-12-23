import React from 'react';
import useBoxPageStates, { IUseBoxPageStates } from '../../ui/pages/BoxPage/states';

export interface IUseStates extends IUseBoxPageStates {

};

export default function useStates(): IUseStates {
  const boxPageStates = useBoxPageStates();
  const {
    isQueryingAPI,
    setIsQueryingAPI,

    alertMessage,
    setAlertMessage,
  } = boxPageStates;

  return {
    isQueryingAPI,
    setIsQueryingAPI,
    
    alertMessage,
    setAlertMessage,
  };
};
