import { elements } from "@constantsForChat";
import { success, unauthorized } from "@utilities/magic_numbers";

export const handleStatus = (status?: string) => {
  switch (status) {
    case success:
      if (elements.authorizationModal) elements.authorizationModal.close();
      if (elements.signInModal) elements.signInModal.close();

      break;
    case unauthorized:
      if (elements.authorizationModal) elements.authorizationModal.showModal();
      break;
    default:
      if (elements.authorizationModal) elements.authorizationModal.showModal();
      closePinnedAndLabel();
  }
};
const closePinnedAndLabel = () => {
  if (elements.pinnedListDiv) {
    elements.pinnedListDiv.style.display = "none";
  }
  if (elements.pinnedLabel) {
    elements.pinnedLabel.style.display = "none";
  }
};
