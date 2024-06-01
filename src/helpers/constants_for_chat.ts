import Cookies from "js-cookie";
import { ElementsTypes } from "@utilities/types_for_const";

const elements: ElementsTypes = {
  settingsBtn: document.querySelector(".settings_button"),
  exitBtn: document.querySelector(".exit_button"),
  mainInput: document.querySelector(".message_input"),
  sentButton: document.querySelector(".sent_message"),
  formElement: document.querySelector(".messages_from"),
  messagesList: document.querySelector(".messages_list"),
  userText: document.querySelector(".user_text"),
  authorizationModal: document.querySelector(".authorization_modal"),
  getTokenButton: document.querySelector(".getTheEmailCodeButton"),
  sentTokenButton: document.querySelector(".sentTheEmailCodeButton"),
  emailInput: document.querySelector(".getEmailCodeInput"),
  emailHandlingForm: document.querySelector(".emailTokenHandlingForm"),
  signInButton: document.querySelector(".signInButton"),
  signInForm: document.querySelector(".tokenHandlingForm"),
  signInInput: document.querySelector(".getTokenFromEmail"),
  signInModal: document.querySelector(".verification_modal"),
  errorEmailSpan: document.querySelector(".email_error"),
  settingsModal: document.querySelector(".settings_modal"),
  settingsButtonModal: document.querySelector(".settingsButtonModal"),
  settingsForm: document.querySelector(".nameChangingForm"),
  settingsInput: document.querySelector(".settingsInput"),
  closeSettingsModalButton: document.querySelector(".closeSettingsModalBtn"),
  addInfoModal: document.querySelector(".add_info_modal"),
  addInfoEmail: document.querySelector(".add_info_email"),
  addInfoTitle: document.querySelector(".add_info_title"),
  addInfoId: document.querySelector(".add_info_id"),
  addInfoName: document.querySelector(".add_info_name"),
  userTime: document.querySelector(".user_time"),
  userId: document.querySelector(".user_id"),
  pinnedListDiv: document.querySelector(".pinned_list"),
  pinnedDivContainer: document.querySelector(".pinned_list_container"),
  pinnedLabel: document.querySelector(".label_for_pinned"),
  mainDiv: document.querySelector(".container"),
};
const form = elements.formElement;
const mainInput = elements.mainInput;
const template = document.getElementById(
  "message_template"
) as HTMLTemplateElement | null;

const token = Cookies.get("userToken");
const status = Cookies.get("userStatus");
const userAdditionalInfo = localStorage.getItem("userInfo");

export {
  elements,
  form,
  mainInput,
  template,
  token,
  status,
  userAdditionalInfo,
};
