import {
  HeartIcon,
  MapPinIcon,
  FaceSmileIcon,
  FireIcon,
  CurrencyDollarIcon,
  FaceFrownIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";
import {
  BookmarkIcon,
  ShareIcon,
  ExclamationCircleIcon,
  ShoppingBagIcon,
  BanknotesIcon,
} from "@heroicons/react/24/solid";
export default function Carddetail() {
  return (
    <div className="flex ml-45 mt-5 mb-5 gap-5 ">
      {/* part I */}
      <div>
        <div className=" w-190 p-2 border-1 h-340">
          <div className="bg-gray-300">
            <div className="w-full">
              <img src="https://images.khmer24.co/25-08-13/-ud83d-udda42022-cadillac-escalade-sport-platinum-ud83d-ude96-1193526175505496478589868-b.jpg" />
            </div>
            <div className="flex w-50 h-20 gap-1 p-2">
              <img src="https://images.khmer24.co/25-08-13/s--ud83d-udda42022-cadillac-escalade-sport-platinum-ud83d-ude96-1193526175505496462229450-c.jpg" />
              <img src="https://images.khmer24.co/25-08-13/s--ud83d-udda42022-cadillac-escalade-sport-platinum-ud83d-ude96-1193526175505421782154995-b.jpg" />
              <img src="https://images.khmer24.co/25-08-13/s--ud83d-udda42022-cadillac-escalade-sport-platinum-ud83d-ude96-1193526175505496455113485-f.jpg" />
            </div>
          </div>
          <div>
            <div className="flex">
              <HeartIcon className="size-6" />
              <h4 className="text-lg font-bold">
                2022 CADILLAC ESCALADE SPORT PLATTINUM
              </h4>
              <ShoppingBagIcon className="size-6" />
            </div>
            <p className="text-gray-500">
              AD ID: 12515052. Phnom Penh . Aug 13
            </p>
            <div className="space-y-4 text-sm">
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
                បើថ្មីយ៉ាងហ្នឹង អ្នកណាទ្រាំបាន.ទឹកថ្នាំសុីន១ជំុ{" "}
                <span className="font-bold">
                  Calldillac Escalade Sport Platinum 2022
                </span>
              </p>
            </div>
            <div className="flex gap-1">
              <BanknotesIcon className="size-6 text-green-400" />
              <p>179000$</p>
            </div>
            <div className="flex">
              <p>
                ខ្មៅលើបទាំងខាងក្នុងខាងក្រៅ តម្លៃពិសេស
                បងប្អូនត្រូវការអាចមកឥឡូវនេះបាន
              </p>
              <FaceSmileIcon className="size-6 text-orange-400 " />
              <FireIcon className="size-6 text-orange-400" />
              <CurrencyDollarIcon className="size-6 text-green-400" />
              <FaceFrownIcon className="size-6 text-yellow-500" />
            </div>
            <div className="flex gap-2">
              <h4 className="font-bold">Location:</h4>
              <p>
                Total Duong Ngeap Station Street 2004, Phnom Penh, Cambodia Ou
                Baek K'am, Saensokh, Phnom Penh
              </p>
            </div>
            <div className="bg-gray-400 p-4">
              <button className="text-center p-2 w-155 h-10 text-white bg-black">
                Show on Google Map
              </button>
            </div>
            <div className="flex gap-2">
              <h4 className="font-bold">Contact Info:</h4>
              <p>
                Please don't forget to mention that you found this ad on
                khmer24.com.
              </p>
            </div>
            <div className="flex space-x-4">
              <img
                className="size-6"
                src="https://images.khmer24.co/app/images/sim/smart.png"
                alt=""
              />
              <p>015688xxx</p>
            </div>
          </div>
          <div className="space-x-2 flex justify-center ">
            <div className="w-40 h-10 bg-gray-200 flex justify-center">
              <BookmarkIcon className="size-6 mt-2 " />
              <button>Save</button>
            </div>
            <div className="w-50 h-10 bg-gray-200 flex justify-center">
              <ExclamationCircleIcon className="size-6 mt-2" />
              <button>Report</button>
            </div>
            <div className="w-40 h-10 bg-gray-200 flex justify-center">
              <ShareIcon className="size-6 mt-2" />
              <button>Share</button>
            </div>
          </div>
        </div>
        <div className="border-1 p-4 mt-5 w-190">
          <h3 className="text-orange-500">ការមិនទទួលខុសត្រូវ / Disclaimer</h3>
          <p className="text-sm">
            ដែលបានបង្ហោះឡើងដោយសមាជិកឡើយ។
            ដូច្នេះយើងមិនទទួលខុសត្រូវលើការផ្សាយផលិតផលនេះទេ
            ហើយក៏មិនធានាចំពោះបញ្ហាដែលទាក់ទងដោយផ្ទាល់ ឬ ប្រយោលទៅនឹងសកម្មភាព ឬ
            អសកម្មណាមួយឡើយ។
          </p>
          <p className="text-sm">
            We does not control the content posted by members and therefore
            assumes no responsibility and disclaims any liability for any
            consequence relating directly or indirectly to any action or
            inaction.
          </p>
        </div>
        <div className="border-1 mt-2 w-190 p-4">
          <div className="flex space-x-4 mb-5">
            <img
              className="rounded-full"
              src="https://images.khmer24.co/profiles/pictures/25-08-11/m-b6a9a629fd5be0fb20257211881754902470818580541581.jpg"
              alt=""
              width={100}
              height={100}
            />

            <div>
              <h3>លក់ ឡាន</h3>
              <p className="text-gray-300">@carforsale2025</p>
              <p className="text-gray-300">Members Sine 11, Aug 2025</p>
            </div>
          </div>
          <div className="flex gap-5">
            <button className="text-sky-700 bg-sky-200 w-130 h-10 rounded-sm">
              View Profile
            </button>
            <button className="text-sky-700 bg-white w-100 h-10 rounded-sm border-1">
              + Follow
            </button>
          </div>
        </div>
      </div>
      {/* part 2 */}
      <div className="space-y-5">
        <div className="bg-white border-1 h-90 w-80">
          <div className="bg-blue-400 flex space-x-2">
            <img
              className="rounded-full"
              src="https://images.khmer24.co/profiles/pictures/25-08-11/s-b6a9a629fd5be0fb20257211881754902470818580541581.jpg"
              alt=""
              width={100}
              height={100}
            />
            <div className="text-gray-300">
              <h4>លក់ ឡាន</h4>
              <p>@carforsale2025</p>
              <p>Member Since 11, Aug 2025</p>
            </div>
          </div>
          <div className="w-20 h20">
            <a href="https://www.khmer24.com/chhaylimsoeng77027450">
              https://www.khmer24.com/chhaylimsoeng77027450
            </a>
          </div>
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
          </div>
          <div className="bg-amber-600 border-1 mt-2 w-70 h-10 rounded-sm text-white flex">
            <ChatBubbleOvalLeftEllipsisIcon className="size-6 mt-2" />
            <button className="justify-center">Chat</button>
          </div>
        </div>
        <div className="bg-white border-1 w-80 p-2 ">
          <div className="text-red-500 flex text-center">
            <img
              className="size-10"
              src="https://www.khmer24.com/v1.9.2/img/warranty.png"
            />
            <h4>ព័ត៌មានសុវត្ថិភាពសម្រាប់អ្នកទិញ Safety Tips for Buyers</h4>
          </div>
          <div className="ml-5">
            <ul className="list-decimal">
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
