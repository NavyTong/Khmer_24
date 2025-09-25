export default function Navbar() {
  return (
    <nav className="px-24 flex space-x-8 items-center h-16 border-b">
      <div className="flex items-center space-x-2">
        {/* <!-- flag Cambodia --> */}
        <img
          className="w-auto h-12"
          src="https://www.khmer24.com/icon/khmer24.png"
          alt="webname"
        />
        <img
          class="w-8 h-8"
          src="https://www.khmer24.com/icon/km-40x40.png"
          alt=""
        />
      </div>
      <div className="flex-grow">
        <select className="menu" id="search">
          <option value="#">All Category</option>
          <option value="#">Cars and Vehicles</option>
          <option value="#">Phones & Tablets</option>
          <option value="#">Computers & Accessories</option>
          <option value="#">Electronics & Appliances</option>
        </select>
        <input type="text" placeholder="What are you looking for..." />
      </div>
      {/* <!-- button --> */}
      <div className="#">
        <a href="#">Login</a>
        <a id="choose" href="#">
          Or
        </a>
        <a href="#">Register</a>
        <button id="paypalBtn">Sell</button>
      </div>
    </nav>
  );
}
