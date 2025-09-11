const topAds = [
  {
    name: "House for Urgent sale",
    image: "https://images.khmer24.co/25-08-19/s--ud83c-udfe6-house-for-urgent-sale-negotiable-aba-loan-available--777302175559394447185632-b.jpg",
    size: "Vehicles For Rent 1052m²",
  },
  {
    name: "car for rent Daily Toyota ALPARD 2022",
    image: "https://images.khmer24.co/25-09-03/car-for-rent-daily-toyota-alpard-2022-200288175688453294876926-b.jpg",
    size: "Sale 1052m²",
  },
  {
    name: "House for Urgent sale",
    image: "https://images.khmer24.co/25-08-19/s--ud83c-udfe6-house-for-urgent-sale-negotiable-aba-loan-available--777302175559394447185632-b.jpg",
    size: "Sale 1052m²",
  },
  {
    name: "House for Urgent sale",
    image: "https://images.khmer24.co/25-08-19/s--ud83c-udfe6-house-for-urgent-sale-negotiable-aba-loan-available--777302175559394447185632-b.jpg",
    size: "Sale 1052m²",
  },
  {
    name: "House for Urgent sale",
    image: "https://images.khmer24.co/25-08-19/s--ud83c-udfe6-house-for-urgent-sale-negotiable-aba-loan-available--777302175559394447185632-b.jpg",
    size: "Sale 1052m²",
  },
  {
    name: "House for Urgent sale",
    image: "https://images.khmer24.co/25-08-19/s--ud83c-udfe6-house-for-urgent-sale-negotiable-aba-loan-available--777302175559394447185632-b.jpg",
    size: "Sale 1052m²",
  },
  {
    name: "House for Urgent sale",
    image: "https://images.khmer24.co/25-08-19/s--ud83c-udfe6-house-for-urgent-sale-negotiable-aba-loan-available--777302175559394447185632-b.jpg",
    size: "Sale 1052m²",
    address: "Phnom Penh, Chamkarmon",
  },
];

let topAdsHtml = "";
for (let i = 0; i < topAds.length; i++) {
  topAdsHtml += `
    <div class="top_ads_card">
        <img
          src="${topAds[i].image}"
          alt=""
        />
        <h4>${topAds[i].name}</h4>
        <p class="size">${topAds[i].size}</p>
        <p class="Date">${topAds[i].address}</p>
        <p class="price">$750,000</p>
      </div>
   `;
}

document.getElementById("top_ads").innerHTML = topAdsHtml;
