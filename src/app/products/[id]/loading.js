import React from "react";
import Spinner from "@/app/components/spinner";

const loading = () => {
  return (
    <div className="flex items-center justify-center">
      <Spinner />
    </div>
  );
};

export default loading;
