import React from 'react';
import useBoxPageStates, { IUseBoxPageStates } from '../../ui/pages/BoxPage/states';
import {
  PostIdState,
  FormFieldsState,
} from './types';

export interface IUseStates extends IUseBoxPageStates {
  postId: PostIdState;
  setPostId: React.Dispatch<React.SetStateAction<PostIdState>>;

  formFields: FormFieldsState;
  setFormFields: React.Dispatch<React.SetStateAction<FormFieldsState>>;
};

export default function useStates(): IUseStates {
  const boxPageStates = useBoxPageStates();
  const {
    isQueryingAPI,
    setIsQueryingAPI,

    alertMessage,
    setAlertMessage,
  } = boxPageStates;
  const [postId, setPostId] = React.useState<PostIdState>(undefined);
  const [formFields, setFormFields] = React.useState<FormFieldsState>({
    title: '',
    description: '',
    creator: '',
    tags: [],
    fileUpload: {
      base64URL: '',
      file: null,
    },
  })

  return {
    isQueryingAPI,
    setIsQueryingAPI,
    
    alertMessage,
    setAlertMessage,

    postId,
    setPostId,

    formFields,
    setFormFields,
  };
};
