import Cookies from "js-cookie";

const apiLink = "https://edu.strada.one/api/messages/ ";
const token = Cookies.get("userToken") || "";

export const messagesRequest = async () => {
  try {
    const response = await fetch(apiLink, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    localStorage.setItem("messagesData", JSON.stringify(data.messages));
    console.log("data", data.messages);
    return data;
  } catch (error) {
    console.error("Failed to fetch", error);
    return { data: null };
  }
};
