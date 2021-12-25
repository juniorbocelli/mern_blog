export type IdPostDataAPI = string;

export type PostDataAPI = {
  _id?: string;

  title: string;
  description: string;

  tags: Array<string>;
  fileUpload: string | undefined;
  upVote?: number;

  creator: string;
  createdAt?: Date;
};