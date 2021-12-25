import getAllBlogPostsAPI from "../../globals/services/blog/getAllBlogPostsAPI";
import addBlogPostAPI from "../../globals/services/blog/addBlogPostAPI";
import getSinglePostAPI from "../../globals/services/blog/getSinglePostAPI";
import updateSingleBlogPostAPI from "../../globals/services/blog/updateSingleBlogPostAPI";
import removeSinglePostAPI from "../../globals/services/blog/removeSinglePostAPI";
import likeBlogPostAPI from "../../globals/services/blog/likeBlogPostAPI";

import { IUseStates } from './states';
import { PostsListState, Post } from './types';
import { IdPostDataAPI, PostDataAPI } from '../../globals/services/blog/types';

export interface IUseAPIs {
  getAllBlogPosts: () => void;
  addBlogPost: () => void;
  getSinglePost: () => void;
  updateSingleBlogPost: () => void;
  removeSinglePost: () => void;
  likeBlogPost: () => void;
};

export default function useAPIs(states: IUseStates): IUseAPIs {
  const {
    setIsQueryingAPI,
    setAlertMessage,
  } = states;

  const getAllBlogPosts = () => {
    const {
      setPostsList,
    } = states;

    setIsQueryingAPI(true);

    getAllBlogPostsAPI()
      .then((response) => {
        const data: Array<PostDataAPI> = response.data;
        let posts: PostsListState = [];
        // TODO: improve error control at optional data
        data.map((item) => {
          posts.push({
            id: item._id!,

            title: item.title,
            description: item.description,

            tags: item.tags,
            fileUpload: item.fileUpload,
            upVote: item.upVote!,

            creator: item.creator,
            createdAt: item.createdAt!,
          });
        });

        setPostsList(posts);
      })
      .catch((error) => {
        setAlertMessage({
          title: "Error",
          message: error.data.message,
        })
      })
      .finally(() => {
        setIsQueryingAPI(false);
      });
  };

  const addBlogPost = () => {
    const {
      formFields,
      setFormFields,
    } = states;

    setIsQueryingAPI(true);

    const postToSend: PostDataAPI = {
      title: formFields.title,
      description: formFields.description,

      tags: formFields.tags,
      fileUpload: formFields.fileUpload.base64URL?.toString(),

      creator: formFields.creator,
      createdAt: new Date(),
    };

    addBlogPostAPI(postToSend)
      .then((response) => {
        // Because the control of default options are in bakckend, it's not safe to overlay these options here, so we are
        // reload the posts
        getAllBlogPosts();

        // TODO: create a single font of initial states
        setFormFields({
          title: '',
          description: '',

          tags: [],
          fileUpload: {
            base64URL: '',
            file: null,
          },
          creator: ''
        })
      })
      .catch((error) => {
        setAlertMessage({
          title: "Error",
          message: error.data.message,
        })
      })
      .finally(() => {
        setIsQueryingAPI(false);
      });
  };

  const getSinglePost = () => {

  };

  const updateSingleBlogPost = () => {

  };

  const removeSinglePost = () => {

  };

  const likeBlogPost = () => {

  };

  return {
    getAllBlogPosts,
    addBlogPost,
    getSinglePost,
    updateSingleBlogPost,
    removeSinglePost,
    likeBlogPost,
  };
};