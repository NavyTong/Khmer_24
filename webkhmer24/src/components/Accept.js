import React from "react";

const accept = [
  {
    title: "We accept:",
    custom: (
      <>
        <img src="https://www.khmer24.com/v1.9.1/icon/ABA.svg" alt="" />
        <img src="https://www.khmer24.com/v1.9.1/icon/Khqr.svg" alt="" />
        <img src="https://www.khmer24.com/v1.9.1/icon/Visa.svg" alt="" />
        <img src="https://www.khmer24.com/v1.9.1/icon/Mastercard.svg" alt="" />
        <img src="https://www.khmer24.com/v1.9.1/icon/UPI.svg" alt="" />

        <img src="https://www.khmer24.com/v1.9.1/icon/JCB.svg" alt="" />
      </>
    ),
  },
];
export default function Accept() {
  return (
    <div className="accept w-15 float-right mr-90">
      {accept.map((section, index) => (
        <div key={index}>
          <h4>{section.title}</h4>
          <div className="flex gap-2 items-center">{section.custom}</div>
        </div>
      ))}
    </div>
  );
}
