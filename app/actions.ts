"use server";

export const formAction = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
};

export const increment = async (previoutState: number) => {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(previoutState);

  return previoutState + 1;
};
