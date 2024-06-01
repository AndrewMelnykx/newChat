import { elements } from "../helpers/constants_for_chat";

const isValidEmailInput =
  elements.emailInput &&
  elements.emailInput.value.trim() !== "" &&
  elements.emailInput.value.includes("@") &&
  elements.emailInput.value.includes(".com");

export { isValidEmailInput };
