interface SignInModalTypes {
  signInModal: HTMLDialogElement | null;
  signInButton: HTMLButtonElement | null;
  signInForm: HTMLFormElement | null;
  signInInput: HTMLInputElement | null;
  errorEmailSpan: HTMLSpanElement | null;
}

interface SettingsModalTypes {
  settingsButtonModal: HTMLButtonElement | null;
  settingsForm: HTMLFormElement | null;
  settingsInput: HTMLInputElement | null;
  settingsModal: HTMLDialogElement | null;
  closeSettingsModalButton: HTMLButtonElement | null;
}

interface AddInfoModalTypes {
  addInfoModal: HTMLDialogElement | null;
  addInfoEmail: HTMLLIElement | null;
  addInfoTitle: HTMLParagraphElement | null;
  addInfoId: HTMLLIElement | null;
  addInfoName: HTMLLIElement | null;
}

interface FormElementsTypes {
  mainInput: HTMLInputElement | null;
  sentButton: HTMLButtonElement | null;
  formElement: HTMLFormElement | null;
  emailInput: HTMLInputElement | null;
  emailHandlingForm: HTMLFormElement | null;
}

interface MessageListTypes {
  messagesList: HTMLUListElement | null;
}

interface UserTextTypes {
  userText: HTMLSpanElement | null;
}

interface AuthorizationModalTypes {
  authorizationModal: HTMLDialogElement | null;
  getTokenButton: HTMLButtonElement | null;
  sentTokenButton: HTMLButtonElement | null;
}
interface forPinnedArr {
  id?: string;
  name?: string;
  text?: string;
}

interface ElementsTypes
  extends SignInModalTypes,
    SettingsModalTypes,
    AddInfoModalTypes,
    FormElementsTypes,
    MessageListTypes,
    UserTextTypes,
    AuthorizationModalTypes {
  settingsBtn: HTMLButtonElement | null;
  exitBtn: HTMLButtonElement | null;
  userTime: HTMLSpanElement | null;
  userId: HTMLLIElement | null;
  pinnedListDiv: HTMLDivElement | null;
  pinnedDivContainer: HTMLDivElement | null;
  pinnedLabel: HTMLLabelElement | null;
  mainDiv: HTMLDivElement | null;
}
interface AddInfoTypes {
  name: string;
  token: string;
  email: string;
  _id: string;
}
interface User {
  email: string;
  name: string;
}
interface MessageForPin {
  id: string;
}

interface MessagesFromStorage {
  _id: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  user: User;
  __v: number;
}
interface NewMessageType {
  name: string | null; //(По другому никак не мог сделать :( )
  text: string;
  time?: string;
  userEmail?: string;
}

export {
  ElementsTypes,
  AddInfoTypes,
  MessagesFromStorage,
  User,
  NewMessageType,
  forPinnedArr,
  MessageForPin,
};
