const apiLink = "https://edu.strada.one/api/user";

export const newNameFetch = async (userName?: string, token?: string) => {
  try {
    const response = await fetch(apiLink, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name: userName }),
    });
    const data = await response.json();
    console.log("data from setting dialog: ", data);
    localStorage.setItem("newUserName", data.name);
  } catch (error) {
    console.error("Failed to fetch", error);
  }
};
