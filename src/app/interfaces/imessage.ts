export interface IMessage {
  _id: string;
  userType: string;
  username: string;
  message: string;
  timestamp: string;
  display?: boolean;
}
