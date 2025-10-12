import { CameraIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
export default function Navbar() {
  return (
    <div className="bg-white shadow-xl">
      <nav className="px-50 flex space-x-10 items-center h-20 lg:border-b">
        {/* <!-- flag Cambodia --> */}
        <div className="flex items-center">
          <img
            className="w-auto h-10 "
            src="https://www.khmer24.com/icon/khmer24.png"
            alt="webname"
          />
          <img
            className="w-8 h-8"
            src="https://www.khmer24.com/icon/km-40x40.png"
            alt="cambodia"
          />
        </div>
        <div className="grow hidden justify-center lg:flex ">
          <select id="search" className="border text-center w-40 bg-gray-200">
            <option value="#">All Category</option>
            <option value="#">Cars and Vehicles</option>
            <option value="#">Phones & Tablets</option>
            <option value="#">Computers & Accessories</option>
            <option value="#">Electronics & Appliances</option>
          </select>
          <div className="border p-2 w-95 h-9 flex space-x-40 bg-gray-200">
            <input
              type="text"
              // className="border p-2 w-95 h-9 float-end"
              placeholder="What are you looking for..."
            />
            <MagnifyingGlassIcon className="size-6 bg-gray-200 " />
          </div>
        </div>
        {/* <!-- button --> */}
        <div className="flex items-center space-x-2.5 ">
          <a href="#" className="text-sky-400 font-bold">
            Login
          </a>
          <a id="choose" href="#" className="text-gray-400">
            Or
          </a>
          <a href="#" className="text-sky-400 font-bold">
            Register
          </a>
          <button className="border bg-orange-400 w-20 h-10 text-2xl rounded-md flex space-x-2">
            <CameraIcon className="w-6 text-white m-1" />
            <span className="text-white font-sans font-bold">Sell</span>
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
