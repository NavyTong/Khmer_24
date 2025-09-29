import Navbar from "@/components/Navbar";
import Logo from "@/components/Logo";
import Text from "@/components/Text";
import Category from "@/components/Category";
import TopAds from "@/components/TopAds";
import Latest from "@/components/Latest";
import Location from "@/components/Location";
import Picture from "@/components/Picture";
import Follow from "@/components/Follow";
import Accept from "@/components/Accept";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Logo />
      <Text />
      <Category />
      <TopAds />
      <Latest />
      <Location />
      <Picture />
      <Follow />
      <Accept />
    </div>
  );
}
