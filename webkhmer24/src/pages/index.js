import Navbar from "@/components/Navbar";
import Logo from "@/components/Logo";
import Text from "@/components/Text";
import Category from "@/components/Category";
import TopAds from "@/components/TopAds";
import Latest from "@/components/Latest";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Logo />
      <Text />
      <Category />
      <TopAds />
      <Latest />
    </div>
  );
}
