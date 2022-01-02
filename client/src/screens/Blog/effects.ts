import React from 'react';

import { IUseAPIs } from './apis';
import { PostIdState } from './types';

export interface IUseEffects {
  useComponentDidMount: () => void;
  usePostIdWasChanged: (postId: PostIdState) => void;
};

export default function useEffects(apis: IUseAPIs): IUseEffects {
  const useComponentDidMount = () => {
    React.useEffect(() => {
      apis.getAllBlogPosts();
    }, []);
  };

  const usePostIdWasChanged = (postId: PostIdState) => {
    React.useEffect(() => {
      if (typeof(postId) !== "undefined")
        apis.getSinglePost();
    }, [postId]);
  };

  return {
    useComponentDidMount,
    usePostIdWasChanged,
  };
};