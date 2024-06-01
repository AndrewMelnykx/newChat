import { renderMessages } from "@helpers/messages_rendering";
import { templateForPinnedMessage, parsedPinnedMessages } from "./pin_list";
import { elements } from "@constantsForChat";
import { alreadyPinned } from "./pin_message";

const rerenderAfterClosing = () => {
  renderMessages(0, 20);
  setTimeout(() => {
    renderPinnedMessages();
  }, 300);
};
const renderPinnedMessages = () => {
  if (elements.pinnedListDiv) {
    elements.pinnedListDiv.innerHTML = "";
    alreadyPinned.forEach((msg: { id: string; name: string; text: string }) => {
      templateForPinnedMessage(msg.name, msg.text, msg.id);
    });
  }
};
export default function renderPinnedFromStorage() {
  if (elements.pinnedListDiv) {
    elements.pinnedListDiv.innerHTML = "";
  }
  parsedPinnedMessages?.forEach(
    (msg: { id: string; name: string; text: string }) => {
      templateForPinnedMessage(msg.name, msg.text, msg.id);
    },
    console.log(parsedPinnedMessages)
  );
}

export { rerenderAfterClosing, renderPinnedMessages };
