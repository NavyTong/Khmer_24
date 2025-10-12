import React from "react";
const imgs = [
  {
    custom: (
      <>
        <img src="https://www.khmer24.com/v1.9.2/icon/ABA.svg" alt="" />
        <img src="https://www.khmer24.com/v1.9.2/icon/Khqr.svg" alt="" />
        <img src="https://www.khmer24.com/v1.9.2/icon/Visa.svg" alt="" />
        <img src="https://www.khmer24.com/v1.9.2/icon/Mastercard.svg" alt="" />
        <img src="https://www.khmer24.com/v1.9.2/icon/UPI.svg" alt="" />

        <img src="https://www.khmer24.com/v1.9.2/icon/JCB.svg" alt="" />
      </>
    ),
  },
];
export default function Accept() {
  return (
    <div className="bg-blue-500">
      {imgs.map((section, index) => (
        <div key={section.index} className="flex ">
          <h4>We accept:</h4>
          <div className="flex gap-2 w-15 mb-5">{section.custom}</div>
        </div>
      ))}
    </div>
  );
}
