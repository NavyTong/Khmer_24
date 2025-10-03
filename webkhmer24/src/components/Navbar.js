export default function Navbar() {
  return (
    <div>
      <nav className="px-20 flex space-x-10 items-center h-20 lg:border-b">
        {/* <!-- flag Cambodia --> */}
        <div className="flex items-center">
          <img
            className="w-auto h-12 "
            src="https://www.khmer24.com/icon/khmer24.png"
            alt="webname"
          />
          <img
            className="w-8 h-8"
            src="https://www.khmer24.com/icon/km-40x40.png"
            alt="cambodia"
          />
        </div>
        <div className="grow hidden justify-center lg:flex">
          <select id="search" className="border text-center w-40">
            <option value="#">All Category</option>
            <option value="#">Cars and Vehicles</option>
            <option value="#">Phones & Tablets</option>
            <option value="#">Computers & Accessories</option>
            <option value="#">Electronics & Appliances</option>
          </select>
          <input
            className="border p-2 w-95 h-9"
            type="text"
            placeholder="What are you looking for..."
          />
        </div>
        {/* <!-- button --> */}
        <div className="flex items-center space-x-2.5 ">
          <a href="#" className="text-sky-400">
            Login
          </a>
          <a id="choose" href="#" ClassName="text-gray-500">
            Or
          </a>
          <a href="#" className="text-sky-400">
            Register
          </a>
          <button
            id="paypalBtn"
            className="border bg-orange-500 h-8 w-20 text-xl rounded-md"
          >
            Sell
          </button>
        </div>
      </nav>
      <nav className="px-20 flex items-center border-b h-20 lg:hidden">
        <select id="search" className="border p-2 text-center w-40">
          <option value="#">All Category</option>
          <option value="#">Cars and Vehicles</option>
          <option value="#">Phones & Tablets</option>
          <option value="#">Computers & Accessories</option>
          <option value="#">Electronics & Appliances</option>
        </select>
        <input
          className="border p-2 w-95 h-9"
          type="text"
          placeholder="What are you looking for..."
        />
      </nav>
    </div>
  );
}
