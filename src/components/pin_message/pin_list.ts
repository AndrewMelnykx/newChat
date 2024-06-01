import { alreadyPinned } from "./pin_message";
import { elements } from "@constantsForChat";
//@ts-ignore
import img from "../../../assets/images/cancel.png";
import { rerenderAfterClosing } from "./pin_rendering";
import renderPinnedFromStorage from "./pin_rendering";
import { scrollToPinnedMessage } from "@utilities/utilities_functions";
import { setPinnedToStorage } from "./pin_message";

const pinnedMessagesFromArray = localStorage.getItem("pinnedMessages");
const parsedPinnedMessages = pinnedMessagesFromArray
  ? JSON.parse(pinnedMessagesFromArray)
  : [];

if (!parsedPinnedMessages || parsedPinnedMessages.length <= 0) {
  if (elements.pinnedDivContainer) {
    elements.pinnedDivContainer.style.display = "none";
  }
}

const templateForPinnedMessage = (
  name?: string,
  text?: string,
  id?: string
) => {
  const li_name = document.createElement("li");
  const li_text = document.createElement("li");
  const li_id = document.createElement("li");
  const div_for_li = document.createElement("div");
  const pin_list = document.createElement("ul");
  const remove_li_button = document.createElement("button");
  const remove_li_img = document.createElement("img");
  li_id.classList.add("user_id_pin");
  li_name.classList.add("user_name_pin");
  li_text.classList.add("user_text_pin");
  div_for_li.classList.add("div_for_li");
  remove_li_img.classList.add("remove_li_img");
  remove_li_button.classList.add("remove_li_button");
  remove_li_img.src = img;

  pin_list.classList.add("user_list_pin");

  const credentials = li_id && li_name && li_text;
  if (!credentials) {
    return;
  }
  li_id.textContent = id ?? "";
  li_name.textContent = name + ` :` ?? "";
  if (text && text.length > 20) {
    li_text.textContent = text.slice(0, 20) + "...";
  } else {
    li_text.textContent = text ?? "";
  }
  remove_li_button.appendChild(remove_li_img);
  div_for_li.appendChild(remove_li_button);
  li_name.appendChild(li_text);
  div_for_li.appendChild(li_name);
  div_for_li.appendChild(li_id);
  pin_list.appendChild(div_for_li);
  elements.pinnedListDiv?.appendChild(pin_list);
  closePinnedMessage(remove_li_button, div_for_li, id);
  div_for_li.addEventListener("click", () => {
    scrollToPinnedMessage(id);
  });
};

const closePinnedMessage = (
  parentElement: HTMLButtonElement | null,
  elementToDelete: HTMLDivElement | null,
  id?: string
) => {
  parentElement?.addEventListener("click", () => {
    elementToDelete?.parentElement?.remove();
    const index = alreadyPinned.findIndex((item) => item.id === id);
    if (index !== -1) {
      alreadyPinned.splice(index, 1);
    }
    setPinnedToStorage();
    rerenderAfterClosing();
  });
};

window.addEventListener("load", renderPinnedFromStorage);
export { parsedPinnedMessages, templateForPinnedMessage };
