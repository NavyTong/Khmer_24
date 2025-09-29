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
    <div>
      <li
        key={index}
        style={{
          color: "#006DA1",
          padding: "1px",
          textAlign: "center",
        }}
      >
        {loc}
      </li>
    </div>
  ));
  return (
    <div>
      <h2>Browse by Location</h2>
      <ul
        style={{
          border: "1px solid #ddd",
          liststyle: "none",
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "5px",
          padding: 0,
        }}
      >
        {listItems}
      </ul>
    </div>
  );
}
