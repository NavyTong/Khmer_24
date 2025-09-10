// list of categories
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
    name: "Cars and vehicles",
    img: "https://images.khmer24.co/categories/23-01-17/s-cars-and-vehicles-1673926803.png",
  },
  {
    name: "Phones & Tablets",
    img: "https://images.khmer24.co/categories/21-12-07/s-mobile-phones-tablets-1638848154.png",
  },
    {
    name: "Cars and vehicles",
    img: "https://images.khmer24.co/categories/23-01-17/s-cars-and-vehicles-1673926803.png",
  },
  {
    name: "Phones & Tablets",
    img: "https://images.khmer24.co/categories/21-12-07/s-mobile-phones-tablets-1638848154.png",
  },
];

let html = "";
for (let i = 0; i < categories.length; i++) {
  html += `
  <div class="category_item2">
        <img
          src="${categories[i].img}"
          alt=""
        />
        <p>${categories[i].name}</p>
      </div>
   `;
}

document.getElementById("category_list").innerHTML = html;

const hello = "Hello World";
console.log(hello);

const car = {type:"Fiat", model:"500", color:"white"};
console.log(car.color);
