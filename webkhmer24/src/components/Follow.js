import React from "react";

const footerSelections = [
  {
    title: "Follow khmer24",
    items: ["Facebook", "Youtube"],
  },
  {
    title: "Customer Service",
    items: ["Contact Us", "Privacy Policy", "Account Deletion"],
  },
  {
    title: "Useful Information",
    items: ["Safety Tips", "Add Posting Rule", "Feedback"],
  },
  {
    title: "Download khmer24 app FREE",
    custom: (
      <div className="useful space-x-10 ">
        <div className="qr">
          <li>
            <img src="https://www.khmer24.com/icon/khmer24-qr-code.png" />
          </li>
        </div>
        <div className="item ">
          <li>
            <img src="https://www.khmer24.com/icon/appstore.png" alt="" />
            <img src="https://www.khmer24.com/icon/playstore.png" alt="" />
            <img src="https://www.khmer24.com/icon/appGallery_.jpg" alt="" />
          </li>
        </div>
      </div>
    ),
  },
];

export default function Footer() {
  return (
    <div id="detail" className="flex">
      {footerSelections.map((section, index) => (
        <div className="follow_khmer24 " key={index}>
          <h4 className="font-bold ">{section.title}</h4>
          {section.items ? (
            <ul>
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : (
            section.custom
          )}
        </div>
      ))}
    </div>
  );
}
