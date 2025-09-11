// list categories
const categories = [
  {
    name: "Cars and vehicles",
    img: "https://images.khmer24.co/categories/23-01-17/s-cars-and-vehicles-1673926803.png",
  },
  {
    name: "Phones & Tablets",
    img: "https://images.khmer24.co/categories/21-12-07/s-mobile-phones-tablets-1638848154.png",
  },
  {
    name: "Computer & Accessories",
    img: "https://images.khmer24.co/categories/21-12-07/s-computer-and-accessories-1638848160.png",
  },
  {
    name: "Electronics & Appliances",
    img: " https://images.khmer24.co/categories/21-12-07/s-electronics-appliances-1638848165.png",
  },
  {
    name: "House & Land",
    img: "https://images.khmer24.co/categories/23-09-21/s-property-housing-rentals-1695265714.png",
  },
  {
    name: "Services",
    img: "https://images.khmer24.co/categories/21-12-07/s-services-1638848194.png",
  },
  {
    name: "Fashion & Beauty",
    img: "https://images.khmer24.co/categories/21-12-07/s-fashion-beauty-1638848200.png",
  },
  {
    name: "Furniture & Decor",
    img: "https://images.khmer24.co/categories/21-12-07/s-furniture-decor-1638848206.png",
  },
  {
    name: "Books, Sports & hobbies",
    img: "https://images.khmer24.co/categories/21-12-07/s-books-sports-hobbies-1638848212.png",
  },
  {
    name: "Pets",
    img: "https://images.khmer24.co/categories/21-12-07/s-pets-1638848219.png",
  },
  {
    name: "Foods",
    img: "https://images.khmer24.co/categories/21-12-07/s-foods-1638848268.png",
  },
];

let html = "";
for (let i = 0; i < categories.length; i++) {
  html += `
  <div class="category_item">
        <img
          src="${categories[i].img}"
          alt=""
        />
        <p>${categories[i].name}</p>
      </div>
   `;
}
document.getElementById("category_list").innerHTML = html;
