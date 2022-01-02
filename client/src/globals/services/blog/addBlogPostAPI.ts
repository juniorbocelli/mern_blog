import axios from '../../axios';
import { API_BLOG_POST_NEW } from '../../routes';

import { PostDataAPI } from './types';

export default function addBlogPostAPI(data: PostDataAPI) {
  return axios.post(API_BLOG_POST_NEW, {
    ...data
  });
};