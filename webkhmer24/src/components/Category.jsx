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
    <div className="flex flex-wrap w-9/12 items-start mx-auto bg-white border border-gray-200 rounded-lg my-4">
      {categories.map((cat, index) => (
        <CategoryItem key={index} category={cat} />
      ))}
    </div>
  );
};

function CategoryItem(props) {
  const navigaterToNewPage = () => {
    window.location.href = "/car"; //Replace with your design
  };
  const { category } = props;

  return (
    <div className="w-2/12 flex justify-center items-center p-8">
      <div>
        <div
          className="mx-auto bg-sky-100 w-15 h-15 rounded-full flex justify-center items-center"
          onClick={navigaterToNewPage}
        >
          <img
            className="w-16 h-16 object-cover"
            src={category.imgeUrl}
            alt={category.name}
          />
        </div>
        <div className="mt-2">
          <p className="text-center">{category.name}</p>
        </div>
      </div>
    </div>
  );
}

export default Category;
