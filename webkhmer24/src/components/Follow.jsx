export default function Follow() {
  return (
    <div className="flex space-x-10 list-none bg-blue-500 text-white p-10">
      <div className="w-3/12 ml-10">
        <p className="font-bold text-lg">FoLLow Khmer24</p>
        <li>Facebook</li>
        <li>Youtube</li>
      </div>
      <div className="w-3/12">
        <p className="font-bold text-lg">Customer Servide</p>
        <li>Contact Us</li>
        <li>Privacy Policy</li>
        <li>Account Deletion</li>
      </div>
      <div className="w-3/12">
        <p className="font-bold text-lg">Useful Information</p>
        <li>Safety Tips</li>
        <li>Add Posting Rule</li>
        <li>Feedback</li>
      </div>
      <div className="w-3/12 mr-20 ">
        <p className="font-bold text-lg">Download khmer24 app for FREE</p>
        <div className="flex space-x-5">
          <li>
            <img
              className="w-30"
              src="https://www.khmer24.com/icon/khmer24-qr-code.png"
            />
          </li>
          <li className="space-y-2 w-30">
            <img src="https://www.khmer24.com/icon/appstore.png" alt="" />
            <img src="https://www.khmer24.com/icon/playstore.png" alt="" />
            <img src="https://www.khmer24.com/icon/appGallery_.jpg" alt="" />
          </li>
        </div>
      </div>
    </div>
  );
}
