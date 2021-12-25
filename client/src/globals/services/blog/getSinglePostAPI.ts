import axios from '../../axios';
import { API_BLOG_POST_GET } from '../../routes';

import { IdPostDataAPI } from './types';

export default function getSinglePostAPI(id: IdPostDataAPI) {
  return axios.get(API_BLOG_POST_GET.replace(":id", id), {

  });
};