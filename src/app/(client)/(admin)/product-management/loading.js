import React from "react";
import Spinner from "@/app/components/Spinner";

const loading = () => {
  return (
    <div className="flex items-center justify-center py-6">
      <Spinner className="h-40 w-40 fill-primary" />
    </div>
  );
};

export default loading;
