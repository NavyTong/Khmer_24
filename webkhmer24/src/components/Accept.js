import React from "react";
const imgs = [
  {
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
    <div className=" bg-blue-500">
      {imgs.map((section, index) => (
        <div key={section.index} className="flex space-x-10">
          <h4>We accept</h4>
          <div className="flex float-end gap-2 ">{section.custom}</div>
        </div>
      ))}
    </div>
  );
}
