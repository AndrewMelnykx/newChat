const apiLink = "https://edu.strada.one/api/user/me";

export const fetchUserInfo = async (token?: string) => {
  try {
    const response = await fetch(apiLink, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    const status = response.status.toString();

    return { data, status };
  } catch (error) {
    console.error("Failed to fetch", error);
    return { data: null, status: "error" };
  }
};
