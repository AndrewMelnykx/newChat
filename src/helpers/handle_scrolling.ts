import { handleMessagesLoading } from "@helpers/messages_rendering";
import { elements } from "@constantsForChat";
import {
  scrollHeightIncreaser,
  debounce,
} from "@utilities/utilities_functions";
import { renderMessages } from "@helpers/messages_rendering";

const getTheMessagesListLength = async () => {
  const parsedMessages = await handleMessagesLoading();
  if (!parsedMessages) {
    alert("There`re no access to messages");
    return;
  }
  const lengthOfTheList = parsedMessages.length;
  return lengthOfTheList;
};

async function handleScroll() {
  if (elements.messagesList && elements.messagesList.scrollTop === 0) {
    const maximumLength = (await getTheMessagesListLength()) + 1;
    const currentQuantity = elements.messagesList.children.length;

    if (currentQuantity === maximumLength) {
      alert("The full messages list has been uploaded");
      return;
    }
    const newStartIndex = scrollHeightIncreaser();
    await renderMessages(0, newStartIndex);

    setTimeout(() => {
      if (elements.messagesList) {
        const currentScrollHeight = elements.messagesList.scrollHeight;
        const newScrollTop = currentScrollHeight * 0.45;
        elements.messagesList.scrollTop = newScrollTop;
      }
    }, 0);
  }
}
const scrollWithDebounce = debounce(handleScroll, 150);

window.addEventListener("load", getTheMessagesListLength);

elements.messagesList?.addEventListener("scroll", scrollWithDebounce);
