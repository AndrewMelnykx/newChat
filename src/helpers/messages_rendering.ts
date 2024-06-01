import Cookies from "js-cookie";
import { messagesRequest } from "@data/messages_data_request";
import { MessagesFromStorage } from "@utilities/types_for_const";
import getFormattedTime from "./time_handler";
import { template, elements, status } from "@constantsForChat";
import { success } from "@utilities/magic_numbers";
import {
  handleScrollBottom,
  showAsPinnedInTheList,
} from "@utilities/utilities_functions";
import {
  messageSetPinned,
  pinTheMessage,
} from "@components/pin_message/pin_message";
import renderPinnedFromStorage from "@components/pin_message/pin_rendering";
import { highlightPinned } from "@utilities/utilities_functions";

function createClonedTemplate(
  userEmail?: string,
  ulElement?: HTMLUListElement | null
) {
  const myEmail = Cookies.get("userEmail");
  userEmail === myEmail
    ? ulElement?.setAttribute("class", "message_item_diff_user")
    : ulElement?.setAttribute("class", "message_item");

  const clonedMessage = template?.content.cloneNode(true) as DocumentFragment;
  return clonedMessage;
}
const addNewMessage = (
  name: string | null, //(По другому никак не мог сделать :( )
  text: string,
  time?: string,
  userEmail?: string,
  _id?: string
) => {
  const ulMessage = document.createElement("ul");
  const clonedMessage = createClonedTemplate(userEmail, ulMessage);

  const userText = clonedMessage.querySelector(".user_text");
  const userTime = clonedMessage.querySelector(".user_time");
  const userNickname = clonedMessage.querySelector(".user_nickname");
  const messageId = clonedMessage.querySelector(".user_id");
  if (userNickname && userText && userTime && messageId) {
    if (name) {
      userNickname.textContent = name + " : ";
    }
    userText.textContent = text;
    userTime.textContent = time ? time : "";
    messageId.textContent = _id ? _id : "";
    ulMessage.setAttribute("data-id", _id ?? "");
    ulMessage.appendChild(clonedMessage);
    elements.messagesList?.appendChild(ulMessage);

    highlightPinned(ulMessage);
    showAsPinnedInTheList(ulMessage, _id);
    messageSetPinned(ulMessage);

    if (name) {
      pinTheMessage(ulMessage, messageId.textContent, name, text);
    }
  }
  renderPinnedFromStorage();
};

const handleMessagesLoading = async () => {
  const messages = await messagesRequest();
  if (!messages) {
    alert("There`s no data !!!");
    return;
  }

  const allMessages = localStorage.getItem("messagesData") ?? "";
  const parsedMessages = JSON.parse(allMessages);
  return parsedMessages;
};

const renderMessages = async (startIndex: number, messagesQuantity: number) => {
  const parsedMessages = await handleMessagesLoading();
  if (!parsedMessages) {
    alert("There`re no access to messages");
    return;
  }
  const endIndex = startIndex + messagesQuantity;
  const messagesToRender = parsedMessages.slice(startIndex, endIndex).reverse();
  messagesToRender.forEach((message: MessagesFromStorage) => {
    const formattedTimeHours = getFormattedTime(message.createdAt);
    addNewMessage(
      message.user.name,
      message.text,
      formattedTimeHours,
      message.user.email,
      message._id
    );
  });
  handleScrollBottom();
};

window.addEventListener("load", () => {
  if (status === success) {
    renderMessages(0, 20);
  }
});

export { addNewMessage, handleMessagesLoading, renderMessages };
