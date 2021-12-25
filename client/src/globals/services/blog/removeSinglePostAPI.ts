import axios from '../../axios';
import { API_BLOG_POST_REMOVE } from '../../routes';

import { IdPostDataAPI } from './types';

export default function removeSinglePostAPI(id: IdPostDataAPI) {
  return axios.delete(API_BLOG_POST_REMOVE.replace(":id", id), {

  });
};