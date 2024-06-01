import { elements } from "@constantsForChat";

import { Notyf } from "notyf";
import "notyf/notyf.min.css";

elements.settingsBtn?.addEventListener("click", () => {
  const notyf = new Notyf({
    duration: 2000,

    position: {
      x: "right",
      y: "top",
    },
    types: [
      {
        type: "info",
        background: "transparent",
        icon: false,
        className: "name_changing_notif",
      },
    ],
  });
  notyf.open({
    type: "info",
    message: "Change your nickname",
  });
});
function tokenRequestNotification() {
  elements.getTokenButton?.addEventListener("click", () => {
    const notyf = new Notyf({
      duration: 2000,

      position: {
        x: "left",
        y: "top",
      },
      types: [
        {
          type: "info",
          background: "transparent",
          icon: false,
          className: "token_request_notif",
        },
      ],
    });
    notyf.open({
      type: "info",
      message: "Token has been sent",
    });
  });
}
function tokenApprovalNotification() {
  const notyf = new Notyf({
    duration: 2000,

    position: {
      x: "center",
      y: "top",
    },
    types: [
      {
        type: "info",
        background: "transparent",
        icon: false,
        className: "token_approval_notif",
      },
    ],
  });
  notyf.open({
    type: "info",
    message: "Your token accepted",
  });
}
function lengthOfTheNickNameNotification(message: string) {
  const notyf = new Notyf({
    duration: 2000,

    position: {
      x: "left",
      y: "bottom",
    },
    types: [
      {
        type: "info",
        background: "transparent",
        icon: false,
        className: "name_changing_notif",
      },
    ],
  });
  notyf.open({
    type: "info",
    message: `${message}`,
  });
}

export {
  tokenRequestNotification,
  tokenApprovalNotification,
  lengthOfTheNickNameNotification,
};
