export default function Follow() {
  return (
    <div className="flex space-x-10 list-none bg-blue-500 text-white p-10">
      <div className="w-3/12 ml-10">
        <p className="font-bold text-lg">FoLLow Khmer24</p>
        <li>Facebook</li>
        <li>Youtube</li>
      </div>
      <div className="w-3/12">
        <p className="font-bold text-lg">Customer Servide</p>
        <li>Contact Us</li>
        <li>Privacy Policy</li>
        <li>Account Deletion</li>
      </div>
      <div className="w-3/12">
        <p className="font-bold text-lg">Useful Information</p>
        <li>Safety Tips</li>
        <li>Add Posting Rule</li>
        <li>Feedback</li>
      </div>
      <div className="w-3/12 mr-20 ">
        <p className="font-bold text-lg">Download khmer24 app for FREE</p>
        <div className="flex space-x-5">
          <li>
            <img
              className="w-30"
              src="https://www.khmer24.com/icon/khmer24-qr-code.png"
            />
          </li>
          <li className="space-y-2 w-30">
            <img src="https://www.khmer24.com/icon/appstore.png" alt="" />
            <img src="https://www.khmer24.com/icon/playstore.png" alt="" />
            <img src="https://www.khmer24.com/icon/appGallery_.jpg" alt="" />
          </li>
        </div>
      </div>
    </div>
  );
}

// import React from "react";

// const footerSelections = [
//   {
//     title: "Follow khmer24",
//     items: ["Facebook", "Youtube"],
//   },
//   {
//     title: "Customer Service",
//     items: ["Contact Us", "Privacy Policy", "Account Deletion"],
//   },
//   {
//     title: "Useful Information",
//     items: ["Safety Tips", "Add Posting Rule", "Feedback"],
//   },
//   {
//     title: "Download khmer24 app FREE",
//     custom: (
//       <div className="useful">
//         <div className="qr">
//           <li>
//             <img src="https://www.khmer24.com/icon/khmer24-qr-code.png" />
//           </li>
//         </div>
//         <div className="item ">
//           <li>
//             <img src="https://www.khmer24.com/icon/appstore.png" alt="" />
//             <img src="https://www.khmer24.com/icon/playstore.png" alt="" />
//             <img src="https://www.khmer24.com/icon/appGallery_.jpg" alt="" />
//           </li>
//         </div>
//       </div>
//     ),
//   },
// ];

// export default function Footer() {
//   return (
//     <div id="detail" className="flex space-x-30 bg-blue-500">
//       {footerSelections.map((section, index) => (
//         <div className="follow_khmer24 " key={index}>
//           <h4 className="font-bold ">{section.title}</h4>
//           {section.items ? (
//             <ul>
//               {section.items.map((item, i) => (
//                 <li key={i}>{item}</li>
//               ))}
//             </ul>
//           ) : (
//             section.custom
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }
