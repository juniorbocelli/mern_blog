export type IsQueryingAPIState = boolean;

export type AlertMessage = {
  title: string;
  message: string;
};
export type AlertMessageState = undefined | AlertMessage;