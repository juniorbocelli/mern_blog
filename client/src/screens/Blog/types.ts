export type PostIdState = undefined | string;

export type FormFieldsState = {
  title: string;
  description: string;

  tags: Array<string>;
  creator: string;

  fileUpload: {
    base64URL: string | ArrayBuffer | null;
    file: Blob | null;
  };
};

export type Post = {
  id: string;

  title: string;
  description: string;

  tags: Array<string>;
  fileUpload: string | undefined;
  upVote: number;

  creator: string;
  createdAt: Date;
};

export type PostsListState = Array<Post>;