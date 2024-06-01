import Cookies from "js-cookie";
import { elements } from "@constantsForChat";
import { fetchUserInfo } from "@data/user_info_request";
import { minimumTokenLength } from "@utilities/magic_numbers";
import { tokenApprovalNotification } from "@components/notifications/notification";

const handleUserInfoFetching = async (e: Event) => {
  e.preventDefault();
  const token = elements.signInInput?.value.trim();
  const isValidTokenInput =
    elements.signInInput &&
    elements.signInInput.value !== "" &&
    elements.signInInput.value.length >= minimumTokenLength &&
    token !== undefined;
  if (!isValidTokenInput && !token) {
    alert("Write correct token!");
    return;
  }
  Cookies.set("userToken", token, { expires: 1 });
  tokenApprovalNotification();

  setTimeout(async () => {
    if (elements.signInModal) {
      elements.signInModal.close();
      const response = await fetchUserInfo(token);
      localStorage.setItem("userInfo", JSON.stringify(response.data));
      Cookies.set("userStatus", response.status, { expires: 1 });

      setTimeout(() => {
        localStorage.setItem("showSettingsModal", "true");
        window.location.reload();
      }, 700);
    }
  }, 400);
};

elements.signInForm?.addEventListener("submit", handleUserInfoFetching);
