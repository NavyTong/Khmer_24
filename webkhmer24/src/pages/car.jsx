import Navbar from "@/components/Navbar";
import Logocar from "@/cards/Logocar";
import Carandvehicle from "@/cards/Carandvehicles";
import Itemvehicle from "@/cards/Itemvehicle";
import Latest from "@/components/Latest";
import Follow from "@/components/Follow";
import Accept from "@/components/Accept";

export default function About() {
  return (
    <div>
      <Navbar />
      <Logocar />
      <Carandvehicle />
      <Itemvehicle />
      <Latest />
      <Follow />
      <Accept />
    </div>
  );
}
