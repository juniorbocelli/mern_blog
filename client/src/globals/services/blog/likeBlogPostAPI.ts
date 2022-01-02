import axios from '../../axios';
import { API_BLOG_POST_LIKE } from '../../routes';

import { IdPostDataAPI } from './types';

export default function likeBlogPostAPI(id: IdPostDataAPI) {
  return axios.patch(API_BLOG_POST_LIKE.replace(":id", id), {

  });
};