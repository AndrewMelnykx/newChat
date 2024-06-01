import { forPinnedArr } from "@utilities/types_for_const";
import renderPinnedFromStorage, { renderPinnedMessages } from "./pin_rendering";
import { elements } from "@constantsForChat";

const alreadyPinned: forPinnedArr[] = [];

function setPinnedToStorage() {
  localStorage.setItem("pinnedMessages", JSON.stringify(alreadyPinned));
}
function showPinnedList() {
  if (elements.pinnedDivContainer) {
    elements.pinnedDivContainer.style.display = "block";
  }
}
const messageSetPinned = (element: HTMLUListElement | null) => {
  element?.addEventListener("click", setPinnedToStorage);
  element?.addEventListener("click", showPinnedList);
  renderPinnedFromStorage();
};

function pinTheMessage(
  element: HTMLUListElement,
  messageId: string,
  name?: string,
  text?: string
) {
  element.addEventListener("click", () => {
    if (!alreadyPinned.some((msg: forPinnedArr) => msg.id === messageId)) {
      alreadyPinned.push({ id: messageId, name: name ?? "", text: text ?? "" });
      renderPinnedMessages();
      setPinnedToStorage();
    }
  });
}

export { pinTheMessage, alreadyPinned, setPinnedToStorage, messageSetPinned };
