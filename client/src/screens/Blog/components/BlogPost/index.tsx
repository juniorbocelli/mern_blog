import React from 'react';
import {
  Card,
  CardMedia,
  Typography,
  Button,
  CardContent,
  CardActions,
} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import moment from "moment";

import blogImageLogo from '../../../../assets/images/blogLogo.png'
import { Post } from '../../types';
import { IUseStates } from '../../states';
import useAPIs from '../../apis';

interface IPostProps {
  post: Post;
  states: IUseStates;
};

const BlogPost: React.FC<IPostProps> = (props) => {
  const {
    post,
    states,
  } = props;

  const apis = useAPIs(states);

  const handlClickUpVote = (id: string) => {
    apis.likeBlogPost(id);
  };

  const handleClickRemove = (id: string) => {
    apis.removeSinglePost(id);
  };

  return (
    <React.Fragment>
      <Card sx={
        {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderRadius: "15px",
          height: "100%",
          position: "relative",
        }
      }
      >
        <CardMedia
          sx={
            {
              height: 0,
              paddingTop: "15%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              backgroundBlendMode: "darken",
            }
          }
          image={post.fileUpload || blogImageLogo}
          title={post.title}
        />{" "}
        <div
          style={
            {
              position: "absolute",
              top: "20px",
              left: "20px",
              color: "white",
            }
          }
        >
          <Typography variant="h6"> {post.creator} </Typography>{" "}
          <Typography variant="body2">
            {" "}
            {moment(post.createdAt).fromNow()}{" "}
          </Typography>{" "}
        </div>{" "}
        <div
          style={
            {
              position: "absolute",
              top: "20px",
              right: "20px",
              color: "white",
            }
          }
        >
          <Button
            style={{
              color: "white",
            }}
            size="small"
            onClick={() => states.setPostId(post.id)}
          >
            <EditIcon sx={{ fontSize: "default" }} />
          </Button>{" "}
        </div>{" "}
        <div
          style={
            {
              display: "flex",
              justifyContent: "space-between",
              margin: "20px",
            }
          }
        >
          <Typography variant="body2" color="textSecondary" component="h2">
            {" "}
            {post.tags.map((tag) => `#${tag} `)}{" "}
          </Typography>{" "}
        </div>{" "}
        <Typography
          sx={
            {
              padding: "0 16px",
            }
          }
          gutterBottom
          variant="h5"
          component="h2"
        >
          {post.title}{" "}
        </Typography>{" "}
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {" "}
            {post.description}{" "}
          </Typography>{" "}
        </CardContent>{" "}
        <CardActions
          sx={
            {
              padding: "0 16px 8px 16px",
              display: "flex",
              justifyContent: "space-between",
            }
          }
        >
          <Button
            size="small"
            color="primary"
            onClick={() => handlClickUpVote(post.id)}
          >
            <ArrowUpwardIcon fontSize="small" /> {post.upVote}{" "}
          </Button>{" "}
          <Button
            size="small"
            color="primary"
            onClick={() => handleClickRemove(post.id)}
          >
            <DeleteIcon sx={{ fontSize: "big" }} />
          </Button>{" "}
        </CardActions>{" "}
      </Card>{" "}
    </React.Fragment>
  );
};

export default BlogPost;