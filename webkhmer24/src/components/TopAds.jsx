import React from "react";
import { EllipsisVerticalIcon, PhotoIcon } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/outline";

const topAds = [
  {
    name: "House for Urgent sale",
    img: "https://images.khmer24.co/25-08-19/s--ud83c-udfe6-house-for-urgent-sale-negotiable-aba-loan-available--777302175559394447185632-b.jpg",
    size: "Sale 1052m²",
    date: "Aug 19 · Peam Ro, Prey Veng",
    price: "$750,000",
  },
  {
    name: "Land for Urgent Sale",
    img: "https://images.khmer24.co/24-08-23/s-777302-ud83cudfe0-urgent-sale-can-talk-to-some-more-1724407239-18177529-d.jpg",
    size: "Sale 5518m²",
    date: "Aug 12 · Snuol, Kratie",
    price: "$155,000",
  },
  {
    name: "ខុនដូសម្រាប់លក់នៅ 7 Residence",
    img: "https://images.khmer24.co/25-08-16/s--7-residence-304217175530221061216138-b.jpg",
    size: "Sale 44m²",
    date: "Aug 12 · Saensokh, Phnom Peng",
    price: "$45,000",
  },
  {
    name: "ផ្នែក លក់ ជាច្រើននាក់",
    img: "https://images.khmer24.co/25-08-16/s--7-residence-304217175530221061216138-b.jpg",
    size: "Full-time 1Year+Experience",
    date: "2d · Krong Preah Sihanouk, Preah Sihanouk",
    price: "$500+",
  },
  {
    name: "លក់វីឡា Queen A បុរី Chip Mong",
    img: "https://images.khmer24.co/24-11-26/s--queen-a-chip-mong-598-284854173259282630040535-b.jpg",
    size: "Sale 4 bedroom 6 Bathroom",
    date: "Nov 26 . Ruessei kaev, Phnom Penh",
    price: "$810,000",
  },
  {
    name: "ទូរឈើលក់",
    img: "https://images.khmer24.co/25-07-03/s---1128631175153306129395691-b.jpg",
    size: " Sale",
    date: "2d . Ruessei kaev, Phnom Penh",
    price: "$500",
  },
  {
    name: "House for Urgent sale",
    img: "https://images.khmer24.co/25-08-19/s--ud83c-udfe6-house-for-urgent-sale-negotiable-aba-loan-available--777302175559394447185632-b.jpg",
    size: "Sale 1052m²",
    date: "Aug 19 · Peam Ro, Prey Veng",
    price: "$750,000",
  },
  {
    name: "ផ្នែក លក់ ជាច្រើននាក់",
    img: "https://images.khmer24.co/25-08-16/s--7-residence-304217175530221061216138-b.jpg",
    size: "Full-time 1Year+Experience",
    date: "2d · Krong Preah Sihanouk, Prey Veng",
    price: "$500+",
  },
  {
    name: "House for Urgent sale",
    img: "https://images.khmer24.co/25-08-19/s--ud83c-udfe6-house-for-urgent-sale-negotiable-aba-loan-available--777302175559394447185632-b.jpg",
    size: "Sale 1052m²",
    date: "Aug 19 · Peam Ro, Prey Veng",
    price: "$750,000",
  },
  {
    name: "Land for Urgent Sale",
    img: "https://images.khmer24.co/24-08-23/s-777302-ud83cudfe0-urgent-sale-can-talk-to-some-more-1724407239-18177529-d.jpg",
    size: "Sale 5518m²",
    date: "Aug 12 · Snuol, Kratie",
    price: "$155,000",
  },
  {
    name: "ខុនដូសម្រាប់លក់នៅ 7 Residence",
    img: "https://images.khmer24.co/25-08-16/s--7-residence-304217175530221061216138-b.jpg",
    size: "Sale 44m²",
    date: "Aug 12 · Saensokh, Phnom Peng",
    price: "$45,000",
  },
];

function TopAdsList() {
  return (
    <div className="my-8 rounded-lg bg-linear-to-t from-cyan-10 to-sky-300 ml-45 mr-45 ">
      <div className="px-4 pt-4 rounded-lg">
        {/* Heading */}
        <h2 className="text-2xl font-bold">Top Ads</h2>
      </div>
      {/* Ads grid */}
      <div
        className="p-5 flex"
        style={{
          gridTemplateColumns: "repeat(3, 1fr)",
          overflowX: "scroll",
          gap: "10px",
        }}
      >
        {topAds.map((ad, index) => (
          <div
            className="shrink-0 bg-white p-1 rounded-lg "
            key={index}
            style={{
              border: "1px solid #ddd",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              width: "250px",
              height: "350px",
            }}
          >
            <div className="relative">
              <EllipsisVerticalIcon className="size-6 text-black-500 border rounded-full top-0 right-0 absolute" />
              <img
                src={ad.img}
                alt={ad.name}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <PhotoIcon className="size-6 text-black-500 border float-end bottom-0 right-0 absolute" />
            </div>
            <div className="p-2">
              <h3 style={{ fontSize: "20px", margin: "10px 0" }}>{ad.name}</h3>
              <p className="bg-gray-200 inline">{ad.size}</p>
              <p className="text-sm">{ad.date}</p>
              <strong className="text-red-500 text-xl">{ad.price}</strong>
              <HeartIcon className=" float-end size-7 " />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopAdsList;
