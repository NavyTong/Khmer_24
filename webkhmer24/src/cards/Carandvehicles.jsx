import React from "react";

export default function Carandvehicle() {
  return (
    <div className="w-250 h-30 border-1 m-10 ml-50">
      <div className="ml-20 mb-5 text-2xl">
        <h1>Cars and Vehicles in Cambodia</h1>
      </div>
      <div className="flex gap-2">
        <div>
          <select id="search" className="border text-center w-40">
            <option value="#">All Location</option>
            <option value="#">Phnom Peng</option>
            <option value="#">Preah Sihanouk</option>
            <option value="#">Kampong Cham</option>
            <option value="#">Siem Reap</option>
            <option value="#">Battambang</option>
            <option value="#">Kandal</option>
            <option value="#">Banteay Meanchey</option>
            <option value="#">Kampong Chhnang</option>
            <option value="#">Kampong Thom</option>
            <option value="#">Kampot</option>
            <option value="#">Kep</option>
            <option value="#">koh kong</option>
            <option value="#">Kratie</option>
            <option value="#">Pailin</option>
            <option value="#">Preah Vihear</option>
            <option value="#">Pursat</option>
            <option value="#">Takeo</option>
          </select>
        </div>
        <div>
          <select id="search" className="border text-center w-40">
            <option value="#">Sort</option>
            <option value="#">Latest Ads</option>
            <option value="#">Price: Low to High</option>
            <option value="#">Price: Hight to Low</option>
          </select>
        </div>
        <div>
          <select id="search" className="border text-center w-40">
            <option value="#">Price</option>
            <option value="#">
              <button>Min $</button>
            </option>
            <option value="#">
              <button>Max $</button>
            </option>
            <option value="#">
              <button>Apply Filter</button>
            </option>
          </select>
        </div>
        <button className="w-30 h-8 bg-amber-600">More Filters</button>
      </div>
    </div>
  );
}
