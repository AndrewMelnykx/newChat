import { tokenRequestNotification } from "@components/notifications/notification";
import { elements } from "@constantsForChat";
import { userTokenRequest } from "@data/token_request";

elements.emailHandlingForm?.addEventListener("submit", (e: Event) => {
  e.preventDefault();
});

const handleTokenSending = async (e: Event) => {
  e.preventDefault();
  const isValidEmailInput =
    elements.emailInput && elements.emailInput.value.trim() !== "";

  if (!isValidEmailInput) {
    alert("Write correct email!");
    return;
  }
  await userTokenRequest(e, elements.emailInput?.value);
  tokenRequestNotification();
};
const handleSignInOpening = () => {
  if (elements.authorizationModal && elements.emailInput?.value.trim() !== "") {
    elements.authorizationModal.close();
    setTimeout(() => {
      elements.signInModal?.showModal();
    }, 300);
  }
};

elements.getTokenButton?.addEventListener("click", handleTokenSending);
elements.sentTokenButton?.addEventListener("click", handleSignInOpening);
