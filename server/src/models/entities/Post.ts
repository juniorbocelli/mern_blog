import mongoose from 'mongoose';

class Post {
  id: mongoose.Types.ObjectId | undefined;
  title: string;
  description: string;

  tags: Array<string>;
  fileUpload?: string;
  upVote: number;

  creator: string;
  createdAt: Date;

  constructor(id: mongoose.Types.ObjectId | undefined = undefined, title: string, description: string, tags: Array<string> = [], upVote = 0, creator: string, createdAt = new Date(), fileUpload: string | undefined = undefined) {
    this.title = title;
    this.description = description;

    this.tags = tags;
    this.fileUpload = fileUpload;
    this.upVote = upVote;
    
    this.creator = creator;
    this.createdAt = createdAt;
  };
};

export default Post;