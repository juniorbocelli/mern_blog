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
  removeSinglePost: (idPost: string) => void;
  likeBlogPost: (idPost: string) => void;
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
        console.log('Response - getAllBlogPostsAPI', response);
        if (typeof (response.data.error) !== 'undefined') {
          setAlertMessage({
            title: "Error",
            message: response.data.error,
          });

          return;
        };

        const data: Array<PostDataAPI> = response.data;
        let posts: PostsListState = [];
        // TODO: improve error control at optional data
        data.map((item) => {
          posts.push({
            id: item.id!,

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
          message: error.message,
        });
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
        console.log('Response - addBlogPostAPI', response);
        if (typeof (response.data.error) !== 'undefined') {
          setAlertMessage({
            title: "Error",
            message: response.data.error,
          });

          return;
        };

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
          message: error.message,
        });
      })
      .finally(() => {
        setIsQueryingAPI(false);
      });
  };

  const getSinglePost = () => {
    const {
      postId,

      setFormFields,
    } = states;
    setIsQueryingAPI(true);

    if (typeof (postId) !== "undefined")
      getSinglePostAPI(postId)
        .then((response) => {
          console.log('Response - getSinglePostAPI', response);
          if (typeof (response.data.error) !== 'undefined') {
            setAlertMessage({
              title: "Error",
              message: response.data.error,
            });

            return;
          };

          const data: PostDataAPI = response.data;

          setFormFields({
            title: data.title,
            description: data.description,

            tags: data.tags,
            fileUpload: {
              base64URL: data.fileUpload || '',
              file: null,
            },

            creator: data.creator,
          });
        })
        .catch((error) => {
          setAlertMessage({
            title: "Error",
            message: error.message,
          });
        })
        .finally(() => {
          setIsQueryingAPI(false);
        });
  };

  const updateSingleBlogPost = () => {
    const {
      postId,
      setPostId,

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
    };

    if (typeof (postId) !== "undefined")
      updateSingleBlogPostAPI(postId, postToSend)
        .then((response) => {
          console.log('Response - updateSingleBlogPostAPI', response);
          if (typeof (response.data.error) !== 'undefined') {
            setAlertMessage({
              title: "Error",
              message: response.data.error,
            });

            return;
          };

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
          });

          setPostId(undefined);
        })
        .catch((error) => {
          setAlertMessage({
            title: "Error",
            message: error.message,
          });
        })
        .finally(() => {
          setIsQueryingAPI(false);
        });
  };

  const removeSinglePost = (idPost: string) => {
    const {
      postId,
      setPostId,

      setFormFields,
    } = states;

    setIsQueryingAPI(true);

    removeSinglePostAPI(idPost)
      .then((response) => {
        console.log('Response - removeSinglePostAPI', response);
        if (typeof (response.data.error) !== 'undefined') {
          setAlertMessage({
            title: "Error",
            message: response.data.error,
          });

          return;
        };

        if (idPost === postId) {
          setFormFields({
            title: '',
            description: '',

            tags: [],
            fileUpload: {
              base64URL: '',
              file: null,
            },
            creator: ''
          });

          setPostId(undefined);
        };

        getAllBlogPosts();
      })
      .catch((error) => {
        setAlertMessage({
          title: "Error",
          message: error.message,
        });
      })
      .finally(() => {
        setIsQueryingAPI(false);
      });
  };

  const likeBlogPost = (idPost: string) => {
    setIsQueryingAPI(true);

    likeBlogPostAPI(idPost)
      .then((response) => {
        console.log('Response - likeBlogPostAPI', response);
        if (typeof (response.data.error) !== 'undefined') {
          setAlertMessage({
            title: "Error",
            message: response.data.error,
          });

          return;
        };

        getAllBlogPosts();

      })
      .catch((error) => {
        setAlertMessage({
          title: "Error",
          message: error.message,
        });
      })
      .finally(() => {
        setIsQueryingAPI(false);
      });
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