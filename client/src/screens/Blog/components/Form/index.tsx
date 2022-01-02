import React from "react";
import {
  Box,
  Paper,
  TextField,
  Typography,
  Button,

  styled,
  useTheme,
} from '@mui/material';

import { IUseStates } from "../../states";
import useAPIs from "../../apis";

const Input = styled('input')({
  display: 'none',
});

const Form: React.FC<IUseStates> = (states) => {
  const theme = useTheme();
  const apis = useAPIs(states);

  const {
    postId,

    formFields,
    setFormFields,
  } = states;

  const getBase64 = (file: Blob) => {
    return new Promise<string | ArrayBuffer | null>(resolve => {
      let fileInfo;
      let baseURL: string | ArrayBuffer | null = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        console.log("Called", reader);
        baseURL = reader.result;
        console.log(baseURL);
        resolve(baseURL);
      };
      console.log(fileInfo);
    });
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files === null)
      return;

    console.log(e.currentTarget.files[0]);
    let { file } = formFields.fileUpload;


    file = e.currentTarget.files[0];

    getBase64(file)
      .then((result: string | ArrayBuffer | null) => {
        console.log("File Is", file);

        setFormFields({
          ...formFields,
          fileUpload: {
            base64URL: result,
            file: file,
          }
        })
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (typeof (postId) === 'undefined')
      apis.addBlogPost();
    else
      apis.updateSingleBlogPost();
  };

  return (
    <Paper sx={{ padding: theme.spacing(5), }}>
      <Box
        component="form"
        autoComplete="on"
        noValidate
        sx={
          {
            "& .MuiTextField-root": {
              margin: theme.spacing(1),
            },
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }
        }
        onSubmit={handleSubmit}
      >
        <Typography variant="h5">
          {postId ? `Update "${formFields.title}"` : "✨ Create a post ✨"}
        </Typography>

        <Box sx={{ width: "95%", margin: "10px 0", }}>
          <label htmlFor="contained-button-file">
            <Input accept="image/*" id="contained-button-file" multiple={false} type="file" onChange={handleFileInputChange} />
            <Button variant="contained" component="span">
              🖼️ Upload Blog Image
            </Button>
          </label>
        </Box>
        <TextField
          name="title"
          variant="outlined"
          label="🔥 Blog Title"
          fullWidth
          value={formFields.title}
          onChange={(e) => setFormFields({ ...formFields, title: e.target.value })}
        />
        <TextField
          name="description"
          variant="outlined"
          label="📙 Blog Description"
          fullWidth
          multiline
          rows={7}
          value={formFields.description}
          onChange={(e) =>
            setFormFields({ ...formFields, description: e.target.value })
          }
        />
        <TextField
          name="creator"
          variant="outlined"
          label="✍️ Author name"
          fullWidth
          value={formFields.creator}
          onChange={(e) =>
            setFormFields({ ...formFields, creator: e.target.value })
          }
        />
        <Typography>Tags (5 max seperated by comma)</Typography>
        <TextField
          name="tags"
          variant="outlined"
          label="🏷️ Tags"
          fullWidth
          value={formFields.tags}
          onChange={(e) =>
            setFormFields({ ...formFields, tags: e.target.value.split(",") })
          }
        />

        <Button
          sx={{ marginBottom: 10, }}
          variant="contained"
          color="secondary"
          size="large"
          type="submit"
        >
          Publish 📝
        </Button>
      </Box>
    </Paper>
  );
};

export default Form;