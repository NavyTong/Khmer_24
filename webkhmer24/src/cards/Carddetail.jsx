import { HeartIcon, MapPinIcon } from "@heroicons/react/24/outline";
import {
  BookmarkIcon,
  ShieldExclamationIcon,
  ShareIcon,
} from "@heroicons/react/24/solid";
export default function Carddetail() {
  return (
    <div className="flex gap-5 ml-45 mt-5 mb-5 ">
      {/* part I */}
      <div className=" w-190 p-2 border-1 ">
        <div className="w-full">
          <img src="https://images.khmer24.co/25-08-13/-ud83d-udda42022-cadillac-escalade-sport-platinum-ud83d-ude96-1193526175505496478589868-b.jpg" />
        </div>
        <div className="flex w-50 h-20 gap-1 p-2">
          <img src="https://images.khmer24.co/25-08-13/s--ud83d-udda42022-cadillac-escalade-sport-platinum-ud83d-ude96-1193526175505496462229450-c.jpg" />
          <img src="https://images.khmer24.co/25-08-13/s--ud83d-udda42022-cadillac-escalade-sport-platinum-ud83d-ude96-1193526175505421782154995-b.jpg" />
          <img src="https://images.khmer24.co/25-08-13/s--ud83d-udda42022-cadillac-escalade-sport-platinum-ud83d-ude96-1193526175505496455113485-f.jpg" />
        </div>
        <div>
          <h4>2022 CADILLAC ESCALADE SPORT PLATTINUM</h4>
          <p>AD ID: 12515052. Phnom Penh . Aug 13</p>
          <div className="flex">
            <h3 className="text-red-500 text-xl font-bold">$179,000</h3>
            <HeartIcon className="size-6" />
          </div>
          <p>Main Category: Cars and Vehicles</p>
          <p>Category: Cars for Sale</p>
          <p>Brand: Cadillac</p>
          <p>Model: Escalade</p>
          <p>Year: 2022</p>
          <p>Tax Type: Plate Number</p>
          <p>Condition: Used</p>
          <p>Body Type: SUV</p>
          <p>Engine Type: Petrol</p>
          <p>Transuission: Auto</p>
          <p>Color: Black</p>
          <p>
            បើថ្មីយ៉ាងហ្នឹង អ្នកណាទ្រាំបាន.ទឹកថ្នាំសុីន១ជំុ Calldillac Escalade
            Sport Platinum 2022
          </p>
          <p>179000$</p>
          <p>
            ខ្មៅលើបទាំងខាងក្នុងខាងក្រៅ តម្លៃពិសេស បងប្អូនត្រូវការអាចមកឥឡូវនេះបាន
          </p>
          <div className="flex gap-2">
            <h4 className="font-bold">Location:</h4>
            <p>
              Total Duong Ngeap Station Street 2004, Phnom Penh, Cambodia Ou
              Baek K'am, Saensokh, Phnom Penh
            </p>
          </div>
          <div>
            <button>Show on Google Map</button>
          </div>
          <div className="flex gap-2">
            <h4 className="font-bold">Contact Info:</h4>
            <p>
              Please don't forget to mention that you found this ad on
              khmer24.com.
            </p>
          </div>
          <p>015688xxx</p>
        </div>
        <div className="space-x-2 flex">
          <div className="w-40 h-10 bg-gray-200 flex">
            <BookmarkIcon className="size-6 mt-2" />
            <button>Save</button>
          </div>
          <div className="w-50 h-10 bg-gray-200 flex">
            <ShieldExclamationIcon className="size-6 mt-2 " />
            <button>Report</button>
          </div>
          <div className="w-40 h-10 bg-gray-200 flex">
            <ShareIcon className="size-6 mt-2" />
            <button>Share</button>
          </div>
        </div>
      </div>
      {/* part 2 */}
      <div className="space-y-5">
        <div className="bg-white border-1 h-80 w-80">
          <div className="bg-blue-400">
            <img src="" />
            <h4 className="">លក់ ឡាន</h4>
            <p>@carforsale2025</p>
            <p>Member Since 11, Aug 2025</p>
          </div>
          <p>link</p>
          <div className="p-2 flex space-x-10 border-1">
            <MapPinIcon className="size-20" />
            <p>
              Phnom Penh , Total Duong Ngeap Station Street 2004, Phnom Penh,
              Cambodia
            </p>
          </div>
          <div className="text-center mt-8">
            <button className="border-1 rounded-sm p-2 h-10">
              Show on Google Map
            </button>
            <button className="bg-amber-600 border-1 mt-2 w-50 h-10 p-2 rounded-sm">
              Chat
            </button>
          </div>
        </div>
        <div className="bg-white border-1 w-80 p-2 ">
          <div className="text-red-500 text-center">
            <h4>ព័ត៌មានសុវត្ថិភាពសម្រាប់អ្នកទិញ</h4>
            <h5>Safety Tips for Buyers</h5>
          </div>
          <div className="ml-5">
            <ul>
              <li>
                មិនត្រូវធ្វើការផ្ញើប្រាក់ទៅមុន មុនពេលទទួលទំនិញ Do note sent
                money before receiving the goods
              </li>
              <li>
                សូមពិនិត្យមើលទំនិញមុនពេលដែលអ្នកទិញ Check the item before you buy
              </li>
              <li>
                បង់ប្រាក់បន្ទាប់ពីទទួលបានទំនិញ Payment ofter receiving the goods
              </li>
              <li>
                ត្រូវជួបអ្នកលក់នៅទីតាំងដែលមានសុវត្ថិភាព Meet the seller at a
                safe location
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img
            src="https://www.khmer24.ws/www/delivery/ai.php?filename=frame_job_copy.jpg&contenttype=jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
