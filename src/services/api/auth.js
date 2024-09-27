export const signUp = async (user) => {
  try {
    const response = await fetch("https://davits-api.vercel.app/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
