import React from "react";

const categories = [
  {
    name: "Cars and Vehicles",
    imgeUrl:
      "https://images.khmer24.co/categories/23-01-17/s-cars-and-vehicles-1673926803.png",
    imgeSize: 100,
  },
  {
    name: "Phones & Tablets",
    imgeUrl:
      "https://images.khmer24.co/categories/21-12-07/s-mobile-phones-tablets-1638848154.png",
    imgeSize: 100,
  },
  {
    name: "Computers & Accessories",
    imgeUrl:
      "https://images.khmer24.co/categories/21-12-07/s-computer-and-accessories-1638848160.png",
    imgeSize: 100,
  },
  {
    name: "Electronics & Appliances",
    imgeUrl:
      "https://images.khmer24.co/categories/21-12-07/s-electronics-appliances-1638848165.png",
    imgeSize: 100,
  },
  {
    name: "House & Land",
    imgeUrl:
      "https://images.khmer24.co/categories/23-09-21/s-property-housing-rentals-1695265714.png",
    imgeSize: 100,
  },
  {
    name: "Jobs",
    imgeUrl:
      "https://images.khmer24.co/categories/21-12-07/s-jobs-1638848186.png",
    imgeSize: 100,
  },
  {
    name: "Services",
    imgeUrl:
      "https://images.khmer24.co/categories/21-12-07/s-services-1638848194.png",
    imgeSize: 100,
  },
  {
    name: "Fashion & Beauty",
    imgeUrl:
      "https://images.khmer24.co/categories/21-12-07/s-fashion-beauty-1638848200.png",
    imgeSize: 100,
  },
  {
    name: "Furniture & Decor",
    imgeUrl:
      "https://images.khmer24.co/categories/21-12-07/s-furniture-decor-1638848206.png",
    imgeSize: 100,
  },
  {
    name: "Books, Sports & Hobbies",
    imgeUrl:
      "https://images.khmer24.co/categories/21-12-07/s-books-sports-hobbies-1638848212.png",
    imgeSize: 100,
  },
  {
    name: "Pets",
    imgeUrl:
      "https://images.khmer24.co/categories/21-12-07/s-pets-1638848219.png",
    imgeSize: 100,
  },
  {
    name: "Foods",
    imgeUrl:
      "https://images.khmer24.co/categories/21-12-07/s-foods-1638848268.png",
    imgeSize: 100,
  },
];

const Category = () => {
  return (
    <div>
      {categories.map((cat, index) => (
        <div key={index}>
          <img src={cat.imgeUrl} alt={cat.name} />
          <p>{cat.name}</p>
        </div>
      ))}
    </div>
  );
};
export default Category;
