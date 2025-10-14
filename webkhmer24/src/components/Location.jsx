const locations = [
  // Location
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

export default function LocationList() {
  const listItems = locations.map((loc, index) => (
    <div className="text-sky-800">
      <li key={index}>{loc}</li>
    </div>
  ));
  return (
    <div className="mr-43 ml-43 border-0.5 bg-white p-10 rounded-sm">
      <h3 className="font-bold text-lg">Browse by Location</h3>
      <ul className="list-none grid gap-2 grid-cols-5">{listItems}</ul>
    </div>
  );
}
