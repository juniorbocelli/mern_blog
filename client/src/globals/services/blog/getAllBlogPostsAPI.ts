import axios from '../../axios';
import { API_BLOG_POST_GET_ALL } from '../../routes';

export default function getAllBlogPostsAPI() {
  return axios.get(API_BLOG_POST_GET_ALL, {

  });
};