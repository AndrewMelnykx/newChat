import { userAdditionalInfo, elements } from "@constantsForChat";
import Cookies from "js-cookie";
import { handleAddInfoData } from "@utilities/utilities_functions";

const objectFromAddInfo = userAdditionalInfo
  ? handleAddInfoData(userAdditionalInfo)
  : undefined;

export const addInfoModalUsage = (dateNow?: string) => {
  if (!objectFromAddInfo) return;
  const userName = localStorage.getItem("newUserName");
  const userId = objectFromAddInfo._id;
  const userEmail = objectFromAddInfo.email;

  Cookies.set("userEmail", userEmail);

  setTimeout(() => {
    const userCredentials = userId && userEmail && userName;
    if (!userCredentials) {
      alert("Additional information hasn't been found!");
      return;
    }
    if (elements.addInfoEmail)
      elements.addInfoEmail.textContent = `User email :${userEmail}`;
    if (elements.addInfoName)
      elements.addInfoName.textContent = `User name: ${userName}`;
    if (elements.addInfoId)
      elements.addInfoId.textContent = `User id: ${userId}`;
    if (elements.addInfoTitle)
      elements.addInfoTitle.textContent = `New add info about user at: ${dateNow}`;
    elements.addInfoModal?.showModal();
    setTimeout(() => {
      elements.addInfoModal?.close();
      window.location.reload();
    }, 2300);
  });
};
