import axios from '../../axios';
import { API_BLOG_POST_EDIT } from '../../routes';

import { PostDataAPI, IdPostDataAPI } from './types';

export default function updateSingleBlogPostAPI(id: IdPostDataAPI, data: PostDataAPI) {
  return axios.patch(API_BLOG_POST_EDIT.replace(":id", id), {
    data
  });
};