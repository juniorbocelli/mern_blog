export type IdPostDataAPI = string;

export type PostDataAPI = {
  id?: string;

  title: string;
  description: string;

  tags: Array<string>;
  fileUpload: string | undefined;
  upVote?: number;

  creator: string;
  createdAt?: Date;
};