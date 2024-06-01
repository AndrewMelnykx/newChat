import { elements, status } from "@constantsForChat";

import { handleStatus } from "@helpers/handle_modals_visibility";
import getFormattedTime from "@helpers/time_handler";
import { addNewMessage } from "@helpers/messages_rendering";
import {
  sendSocketMessage,
  getSocketMessages,
  socket,
} from "@helpers/socket_chat";

import "@components/modals/authorization_modal/authorization_modal";
import "@components/modals/verification_modal/verification_modal";
import "@components/modals/settings_modal/settings_modal";
import "@components/modals/add_info_modal/add_info_modal";
import "@helpers/messages_rendering";
import "@helpers/time_handler";
import "@helpers/socket_chat";
import "@helpers/handle_scrolling";
import "@helpers/handle_modals_visibility";
import "@components/pin_message/pin_message";
import "@components/pin_message/pin_list";
import "@notifications/notification";
import "@components/exit_button/exit_button";

import Cookies from "js-cookie";
import { handleScrollBottom } from "@utilities/utilities_functions";
import { handleSettingModalOpening } from "@components/modals/settings_modal/settings_modal";

const useHandleStatus = () => {
  handleStatus(status);
};

const handleNewMessageAdding = (e: Event) => {
  e.preventDefault();
  const myEmail = Cookies.get("userEmail");
  const mainInputCredentials = elements.mainInput && elements.mainInput?.value;
  const emailAndInputCredentials =
    myEmail && elements.mainInput?.value !== undefined;
  if (mainInputCredentials) {
    const currentUserName = localStorage.getItem("newUserName");
    const currentTime = new Date();
    const currentData = getFormattedTime(currentTime.toISOString());
    if (emailAndInputCredentials)
      addNewMessage(
        currentUserName,
        elements.mainInput?.value ?? "",
        currentData,
        myEmail
      );
    sendSocketMessage(elements.mainInput?.value);
    handleScrollBottom();

    if (elements.formElement !== null) {
      elements.formElement.reset();
    }
  }
};
const startSocket = () => {
  socket;
};

window.addEventListener("load", startSocket);
window.addEventListener("load", getSocketMessages);
window.addEventListener("load", useHandleStatus);

elements.formElement?.addEventListener("submit", handleNewMessageAdding);
elements.settingsBtn?.addEventListener("click", handleSettingModalOpening);
