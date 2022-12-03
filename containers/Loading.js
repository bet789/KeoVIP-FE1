import Image from "next/image";
import React from "react";

export default function Loading() {
  return (
    <>
      <div className="loading">
        <img src="/assets/images/Spinner-1s-200px-unscreen.gif" alt="Loading" />
      </div>
    </>
  );
}
