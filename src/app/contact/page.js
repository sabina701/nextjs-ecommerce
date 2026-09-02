"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "@/redux/counter/counterSlice";
// export const metadata = {
//   title: "Contact | Techno",
// };

const contactPage = () => {
  const [count, setCount] = useState(0);
  const golbalcount = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  function incrGlobalCount() {
    dispatch(increment());
  }
  return (
    <div className="text-5xl">
      <br />
      <br />
      contact
      <br />
      count:{count}
      <br />
      <button
        onClick={() => setCount(count + 1)}
        className="border rounded-xl  bg-primary text-white  py-2 px-1"
      >
        count
      </button>
      <br />
      <h2>GlobalCount:{golbalcount}</h2>
      <button
        className="border rounded-xl bg-amber-500 text-white py-4 px-1"
        onClick={incrGlobalCount}
      >
        GlobalCount
      </button>
    </div>
  );
};

export default contactPage;
