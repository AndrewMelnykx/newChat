import { token } from "@constantsForChat";
import getFormattedTime from "@helpers/time_handler";
import { addNewMessage } from "./messages_rendering";

const socket = new WebSocket(`wss://edu.strada.one/websockets?${token}`);

const sendSocketMessage = (inputText?: string) => {
  socket.send(JSON.stringify({ text: inputText }));
};

const getSocketMessages = () => {
  socket.onmessage = (e) => {
    const messageData = JSON.parse(e.data);
    const {
      user: { name, email },
      createdAt,
      text,
      _id,
    } = messageData;
    const formattedTime = getFormattedTime(createdAt);
    addNewMessage(name, text, formattedTime, email, _id);
  };
};

export { sendSocketMessage, socket, getSocketMessages };
