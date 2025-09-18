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
    name: "job",
    img: "https://images.khmer24.co/categories/21-12-07/s-jobs-1638848186.png",
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

// top ads
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
];

let html1 = "";
for (let i = 0; i < topAds.length; i++) {
  html1 += `
  <div class="top_ads_card">
        <img
          src="${topAds[i].img}"
          alt=""
        />
        <h4>${topAds[i].name}</h4>
        <p>${topAds[i].size}</p>
        <p>${topAds[i].date}</p>
        <div class="price">
      <p>${topAds[i].price}</p></div>

      </div>
   `;
}
document.getElementById("top_ads").innerHTML = html1;

// latest ads
const latestAds = [
  {
    name: "Want to see your ads here? Make some extra cash by selling this khmer24. Go on, it's quick and easy.",
    select: "Start Selling",
  },
  {
    name: "Link House Urgent Sale",
    img: "https://images.khmer24.co/25-08-20/s--ud83c-udfe6-link-house-urgent-sale-negotiable-aba-loan-available-6-5-p-a-up-to-25-years-repayment-term--777302175568086581613464-b.jpg",
    date: "Aug 20 . Por Senchey, Phnom Penh",
    sale: "sale . 4 Bedroom . 6 Bathroom. 17",
    price: "$138, 000",
  },
  {
    name: "One bedroom apartment for ...",
    img: "https://images.khmer24.co/25-03-20/s-one-bedroom-apartment-for-rent-929123174243948051680910-b.jpg",
    date: "Mar 20 . Saensokh, Phnom Penh",
    sale: "sale . 1 Bedroom . 1 Bathroom. 90",
    price: "$235",
  },
  {
    name: "Land for Urgent sale",
    img: "https://images.khmer24.co/25-08-18/s--ud83c-udfe6land-for-urgent-sale-negotiable-aba-loan-available-777302175550595322891214-b.jpg",
    date: "Aug 18 . Saensokh, Phnom Penh",
    sale: "Sale. 602m²",
    price: "$350,000",
  },
  {
    name: "ផ្នែក លក់",
    img: "https://images.khmer24.co/25-07-14/s---219081175248284434929994-b.jpg",
    date: "3d . Dangkao, Phnom Penh",
    sale: "Full-time . No Experience",
    price: "$850",
  },
  {
    name: "មានលក់ laptop asus tuf a15",
    img: "https://images.khmer24.co/25-08-30/s--laptop-asus-tuf-a15-370853175654299992859006-b.jpg",
    date: "11m . Prampir Meakkakra, Phnom Penh",
    sale: "Used",
    price: "$400",
  },
  {
    name: "ម៉ូតូលក់ក្រដាសពន្ធ",
    img: "https://images.khmer24.co/25-08-30/s---1147524175654297324839015-b.jpg",
    date: "11m . Krong Ta khmau, Kandal",
    sale: "Used . 2010. Tax Paper",
    price: "$1,168",
  },
  {
    name: "ខុនដូបីបន្ទប់គេងតម្លៃល្អខ្លាំង",
    img: "https://images.khmer24.co/25-05-29/s---224621174852359756436226-b.jpg",
    date: "12m . Chamkar Mon, Phnom Penh",
    sale: "Sale. . 152m²",
    price: "$198,000",
  },
  {
    name: "Fortuner 2022",
    img: "https://images.khmer24.co/25-06-27/s-fortuner-2022-772106175099832974657764-b.jpg",
    date: "12m . Mean Chey, Phnom Penh",
    sale: "Sale. . 2022 . Plate Number",
    price: "$53,900",
  },
  {
    name: "Villa for rent at Borey Peng",
    img: "https://images.khmer24.co/25-07-24/s-villa-for-rent-at-borey-peng-huoth-50m-790321175337444348237392-b.jpg",
    date: "12m . Dangkao, Phnom Penh",
    sale: "Rent.4 Bedroom. 5 Bathroom",
    price: "$17,00",
  },
  {
    name: "ផ្ទះសម្រាប់ជួល មានសម្ភារ",
    img: "https://images.khmer24.co/25-08-28/s--3-1027175175635292529360588-b.jpg",
    date: "12m . Por Senchey, Phnom Penh",
    sale: "Rent . 3 Bedroom. 4 Bedroom",
    price: "$300",
  },
  {
    name: "ខុនដូលក់ មេគង្គ",
    img: "https://images.khmer24.co/24-09-22/s--90--162863172700238574389109-b.jpg",
    date: "12m . Chrouy Changva, Phnom Penh",
    sale: "Sale. 90m²",
    price: "$150,000",
  },
  {
    name: "AUS Monitor 120Hz VA259",
    img: "https://images.khmer24.co/25-06-27/s-asus-monitor-va259-25-quot-inch-fhd-ips--737897175103764278819721-b.jpg",
    date: "12m. Tuol kouk, Phnom Penh",
    sale: "New",
    price: "$99",
  },
  {
    name: "Production Supervisor",
    img: "https://images.khmer24.co/25-08-30/s-production-supervisor-673209175654292279576620-b.jpg",
    date: "12m . Por Senchey, Phnom Penh",
    sale: "Fulltime . 3Year + Experience",
    price: "$800+",
  },
  {
    name: "Car for sale nissa frontier 06",
    img: "https://images.khmer24.co/25-08-21/s-car-for-sale-nissan-frontier-06-p2--221453175576269435101655-b.jpg",
    date: "13m . Chrouy Changva, Phnom Penh",
    sale: "Used . 2006. plate Number",
    price: "$9,200",
  },
  {
    img: "https://images.khmer24.co/25-08-25/s--rx-350-f-sport-016-811641175613059052280749-b.jpg",
    name: "តម្លៃល្អ Rx 350 F-Sport 016",
    date: "13m . Tuol Kouk, Phnom Penh",
    sale: "Sale. 4 Bedroom . 6 Bathroom . 17",
    price: "$138,000",
  },
  {
    img: "https://images.khmer24.co/25-07-23/s--fastercharging15w--425264175324820499184343-b.jpg",
    name: "លក់fastercharging 15wក្រុមហុន",
    date: "11. Batheay, Kampong cham",
    sale: "Used",
    price: "$10",
  },
  {
    img: "https://images.khmer24.co/25-07-09/s-m-2-case-nvme-m-2-ngff-16--737897175204593472756566-b.jpg",
    name: "M.2 Case NVME/M.2 NGFF",
    date: "56m . Tuol Kouk, Phnom Penh",
    sale: "New",
    price: "$16",
  },
  {
    name: "Filano",
    img: "https://images.khmer24.co/25-08-30/s-filano-124573175654296928235758-b.jpg",
    date: "56m . Prampir Meakkakra, Phnom Penh",
    sale: "Used . 2017 . Plate Number",
    price: "$780",
  },
  {
    name: "USB WiFi & Bluetooth 2 in 1",
    img: "https://images.khmer24.co/25-08-03/s-usb-wifi-amp-bluetooth-2-in-1-wifi-5--737897175419699388065718-b.jpg",
    date: "57m . Tuol Kouk, Phnom Penh",
    sale: "New",
    price: "$90",
  },
];
let htmllatest = "";
for (let i = 0; i < latestAds.length; i++) {
  htmllatest += `
  <div class="latest_ads_card">
        <img
          src="${latestAds[i].img}"
          alt=""
        />
        <h4>${latestAds[i].name}</h4>
        <p>${latestAds[i].sale}</p>
        <p>${latestAds[i].date}</p>
        <div class="price">
      <p>${latestAds[i].price}</p></div>
      </div>
   `;
}
document.getElementById("latest_ads").innerHTML = htmllatest;

// Location
const locations = [
  "Phnom Penh",
  "Kandal",
  "Kampot",
  "Oddar Meanchey",
  "Ratanakiri",
  "Preah Sihanouk",
  "Banteay Meanchey",
  "Kep",
  "Pailin",
  "Stung Treng",
  "Kampong Cham",
  "Kampong Chhnang",
  "Koh Kong",
  "Preah Vihear",
  "Svay Rieng",
  "Siem Reap",
  "Kampong Speu",
  "Kratie",
  "Prey Veng",
  "Takeo",
  "Battam Bang", // corrected spelling
  "Kampong Thom",
  "Mondulkiri",
  "Pursat",
  "Tboung Khmum",
];

let htmlLocation = " ";
for (let i = 0; i < locations.length; i++) {
  htmlLocation += `
    <li>
      <a href="#">${locations[i]}</a>
    </li>
  `;
}
document.getElementById("locationUl").innerHTML = htmlLocation;

//  Follow khmer24
const footerSelections = [
  {
    title: "Follow Khmer24",
    items: ["Facebook", "YouTube"],
  },
  {
    title: "Customer Service",
    items: ["Contact Us", "Privacy Policy", "Account Deletion"],
  },
  {
    title: "Useful Information",
    items: ["Safety Tips", "Ad Posting Rule", "Feedback"],
  },

  {
    title: "Useful Information",
    custom: `
      <div class="useful">
        <div class="qr">
          <li>
            <img
              src="https://www.khmer24.com/icon/khmer24-qr-code.png"
              alt=""
            />
          </li>
        </div>
        <div class="item">
          <li>
            <img src="https://www.khmer24.com/icon/appstore.png" alt="" />
          
            <img src="https://www.khmer24.com/icon/playstore.png" alt="" />
          
            <img src="https://www.khmer24.com/icon/appGallery_.jpg" alt="" />
          </li>
        </div>
      </div>
    `,
  },
  {
    title: "We accept:",
    custom: `
          <img src="https://www.khmer24.com/v1.8.8/icon/ABA.svg" alt="" />
       
          <img src="https://www.khmer24.com/v1.8.8/icon/Khqr.svg" alt="" />
      
          <img src="https://www.khmer24.com/v1.8.8/icon/Visa.svg" alt="" />
       
          <img
            src="https://www.khmer24.com/v1.8.8/icon/Mastercard.svg" alt=""/>
          <img src="https://www.khmer24.com/v1.8.8/icon/UPI.svg" alt="" />
        
          <img src="https://www.khmer24.com/v1.8.8/icon/JCB.svg" alt="" />
    `,
  },
];
let footerHTML = " ";
footerSelections.forEach((section) => {
  footerHTML += `
  <div class="follow_khmer24>
  <h4>${section.title}</h4>
  ${
    Selection.items
      ? section.items.map((item) => `<li>${item}</li>`).join("")
      : section.custom
  }
  </div>
  `;
});

document.getElementById("detail").innerHTML = footerHTML;
