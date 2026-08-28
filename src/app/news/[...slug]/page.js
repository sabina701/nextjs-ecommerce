import React from "react";

const newsSlug = async ({ params }) => {
  const slug = (await params).slug;

  return (
    <div>
      <ul>
        {slug.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default newsSlug;
