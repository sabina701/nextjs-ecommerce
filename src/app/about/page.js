import React from "react";
export const metadata = {
  title: "About | Techno",
};
const page = async ({ searchParams }) => {
  const query = await searchParams;
  const id = query?.id;
  if (!Number.isInteger(parseInt(id))) {
    throw new Error("put a number");
  }

  return (
    <div>
      about page
      <p>id:{parseInt(id)}</p>
    </div>
  );
};

export default page;
