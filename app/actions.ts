"use server";

export const formAction = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("users data added to DB");
};
