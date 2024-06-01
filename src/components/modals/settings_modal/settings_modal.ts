import { elements, status } from "@constantsForChat";
import Cookies from "js-cookie";

import { newNameFetch } from "@data/new_name_request";
import { handleStatus } from "@helpers/handle_modals_visibility";
import { addInfoModalUsage } from "../add_info_modal/add_info_modal";
import getFormattedTime from "@helpers/time_handler";
import { lengthOfTheNickNameNotification } from "@components/notifications/notification";

const handleSettingsModalVisibility = () => {
  const updatedStatus = Cookies.get("userStatus");
  const showSettingsModal = localStorage.getItem("showSettingsModal");
  if (showSettingsModal === "true" && elements.settingsModal) {
    elements.settingsModal.showModal();
    localStorage.removeItem("showSettingsModal");
    handleStatus(updatedStatus);
  } else {
    console.log("Flag is negative or hasn't been set.");
  }
};

const handleNameFetching = async (e: Event) => {
  e.preventDefault();
  const updatedToken = Cookies.get("userToken");

  const settingsInputValue = elements.settingsInput?.value.trim() ?? "";
  const settingsCredentials = elements.settingsInput && settingsInputValue;

  if (settingsCredentials === "") {
    lengthOfTheNickNameNotification(`Name ${settingsInputValue} is too short!`);
    return;
  } else if (settingsInputValue.length > 10) {
    lengthOfTheNickNameNotification(`Name ${settingsInputValue} is too long!`);
    return;
  }
  await newNameFetch(settingsInputValue, updatedToken);
  if (elements.settingsInput)
    localStorage.setItem("newUserName", settingsInputValue);

  if (elements.settingsModal)
    setTimeout(() => {
      elements.settingsModal?.close();
      const currentTime = new Date();
      const currentData = getFormattedTime(currentTime.toISOString());
      addInfoModalUsage(currentData);
    }, 150);
};

const handleSettingModalClosure = () => {
  setTimeout(() => {
    elements.settingsModal?.close();
  }, 150);
  handleStatus(status);
};
export const handleSettingModalOpening = () => {
  if (elements.settingsBtn && elements.settingsModal) {
    setTimeout(() => {
      elements.settingsModal?.showModal();
    }, 150);
  }
};

elements.closeSettingsModalButton?.addEventListener(
  "click",
  handleSettingModalClosure
);
elements.settingsButtonModal?.addEventListener(
  "click",
  handleSettingModalOpening
);
elements.settingsForm?.addEventListener("submit", handleNameFetching);
document.addEventListener("DOMContentLoaded", handleSettingsModalVisibility);
