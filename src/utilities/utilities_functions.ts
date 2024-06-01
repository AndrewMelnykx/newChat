import { AddInfoTypes, MessageForPin } from "@utilities/types_for_const";
import { elements } from "@constantsForChat";
import { parsedPinnedMessages } from "@components/pin_message/pin_list";

const handleAddInfoData = (data: string): AddInfoTypes | null => {
  try {
    return JSON.parse(data);
  } catch (error) {
    console.error("There`s no additional info", error);
    return null;
  }
};

const handleScrollBottom = () => {
  if (elements.messagesList) {
    elements.messagesList.scrollTop = elements.messagesList.scrollHeight;
  }
};

let currentStartIndex = 0;
const scrollHeightIncreaser = () => {
  currentStartIndex += 20;
  return currentStartIndex;
};

function debounce<T extends (...args: any[]) => void>(func: T, wait: number) {
  let timeout: NodeJS.Timeout | null;
  return function (this: any, ...args: Parameters<T>) {
    const context = this;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

const highlightPinned = (ulElement: HTMLUListElement | null) => {
  ulElement?.addEventListener("click", () => {
    ulElement.classList.add("active");
  });
};

const showAsPinnedInTheList = (
  ulMessage: HTMLUListElement | null,
  _id?: string
) => {
  const isPinned = parsedPinnedMessages.find(
    (msg: MessageForPin) => msg.id?.toString() === _id?.toString()
  );
  if (isPinned) {
    ulMessage?.classList.add("already-pinned");
    console.log("IS pinned   :", isPinned);
  }
};
const scrollToPinnedMessage = (id?: string) => {
  const plainMessage = document.querySelector(`[data-id="${id}"]`);
  if (plainMessage) {
    plainMessage.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export {
  handleAddInfoData,
  handleScrollBottom,
  scrollHeightIncreaser,
  debounce,
  highlightPinned,
  showAsPinnedInTheList,
  scrollToPinnedMessage,
};
