"use client";
import React from "react";

const error = ({ error }) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-cente">
          <p className="text-red-600 text-3xl">oops! something went wrong </p>
          <p className="text-red-500"> {error.message}</p>
        </div>
      </div>
    </section>
  );
};

export default error;
