const latestAds = [
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

const LatestAds = () => {
  return (
    <div style={{ padding: "20px", marginLeft: "75px", marginRight: "75px" }}>
      <h2
        style={{ marginBottom: "20px", fontSize: "24px", fontWeight: "bold" }}
      >
        Latest Ads
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
        }}
      >
        <div className="border border-gray-300 rounded-lg p-4 bg-linear-to-t from-indigo-500 via-indigo-500 to-sky-500 flex flex-col justify-between">
          <div>
            <h4 className="text-center text-lg font-bold text-white">
              Want to see your ads here?
            </h4>
            <h4 className="mt-4 text-center text-white">
              Make some extra cash by selling this khmer24. Go on, it is quick
              and easy.
            </h4>
          </div>
          <button className="mt-4 px-8 py-3 mx-auto w-10/12 bg-white text-blue-600 font-semibold rounded cursor-pointer">
            Start Selling
          </button>
        </div>
        {latestAds.map((ad, index) => (
          <div
            key={index}
            className="latest_ads_card"
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "10px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            {/* If ad has image, show it */}
            {ad.img && (
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
            )}

            <h4 style={{ margin: "10px 0" }}>{ad.name}</h4>

            {ad.sale && <p>{ad.sale}</p>}
            {ad.date && <p>{ad.date}</p>}

            {ad.price && (
              <div style={{ fontWeight: "bold", color: "red" }}>{ad.price}</div>
            )}

            {/* Special case: first ad (Start Selling button) */}
            {ad.select && (
              <button
                style={{
                  marginTop: "10px",
                  padding: "8px 12px",
                  backgroundColor: "#007bff",
                  color: "#f4efefff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                {ad.select}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestAds;
