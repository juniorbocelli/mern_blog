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