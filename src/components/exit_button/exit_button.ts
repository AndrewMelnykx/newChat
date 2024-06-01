import { elements } from "@constantsForChat";
import Cookies from "js-cookie";

const removeAllCookies = () => {
  const allCookies = Cookies.get();
  Object.keys(allCookies).forEach((cookieName) => {
    Cookies.remove(cookieName, { path: "/" });
  });
};

const closeChat = () => {
  setTimeout(() => {
    if (elements.mainDiv) {
      elements.mainDiv.style.display = "none";
      removeAllCookies();
      window.location.reload();
    }
  }, 350);
};

elements.exitBtn?.addEventListener("click", closeChat);
