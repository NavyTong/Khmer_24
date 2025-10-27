import React from "react";

const itemvehicles = [
  {
    name: "Car for sale",
    img: "https://images.khmer24.co/categories/21-12-07/s-cars-for-sale-1638864308.png",
  },
  {
    name: "Bicycles",
    img: "https://images.khmer24.co/categories/21-12-07/s-bicycles-1638864338.png",
  },
  {
    name: "Motorcycles For Sale",
    img: "https://images.khmer24.co/categories/21-12-07/s-motorcycles-for-sale-1638864345.png",
  },
  {
    name: "Vehicles For Rent",
    img: "https://images.khmer24.co/categories/21-12-07/s-vehicles-for-rent-1638864353.png",
  },
  {
    name: "Maintenance & Repair",
    img: "https://images.khmer24.co/categories/21-12-07/s-car-maintenance-repair-1638864358.png",
  },
  {
    name: "Lorries, Vans & Tractors",
    img: "https://images.khmer24.co/categories/21-12-07/s-lorries-vans-and-tractors-1638864364.png",
  },
  {
    name: "Financing & Insurance",
    img: "https://images.khmer24.co/categories/21-12-07/s-financing-insurance-1638864370.png",
  },
  {
    name: "Tuk Tuk & Remork",
    img: "https://images.khmer24.co/categories/21-12-07/s-tuk-tuk-and-remork-1638864378.png",
  },
  {
    name: "Parts & Accessories",
    img: "https://images.khmer24.co/categories/21-10-25/s-car-parts-accessories-1635125149.png",
  },
  {
    name: "Others",
    img: "https://images.khmer24.co/categories/21-10-27/s-others-vihicles-1635300275.png",
  },
];

const Itemvehicles = () => {
  return (
    <div className="flex flex-wrap w-9/12 items-start mx-auto bg-white border border-gray-200 rounded-lg my-4">
      {itemvehicles.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </div>
  );
};

function Item(props) {
  const { item } = props;

  return (
    <div className="w-2/10 flex justify-center items-center p-4">
      <div>
        <div className="mx-auto bg-sky-100 w-15 h-15 rounded-full flex justify-center items-center">
          <img
            className="w-16 h-16 object-cover"
            src={item.img}
            alt={item.name}
          />
        </div>
        <div className="mt-2">
          <p className="text-center">{item.name}</p>
        </div>
      </div>
    </div>
  );
}
export default Itemvehicles;
