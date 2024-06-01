const apiLink = "https://edu.strada.one/api/user";

export const userTokenRequest = async (e: Event, userEmail?: string) => {
  e.preventDefault();
  try {
    const response = await fetch(apiLink, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ email: userEmail }),
    });
    if (!response.ok) {
      console.log("User token hasn`t been found");
    }
    const data = await response.json();
    console.log("token", data);
  } catch (error) {
    console.log("Failed to fetch ", error);
  }
};
