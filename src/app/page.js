import PublicLayout from "@/publicLayout/PublicLayout";
import Image from "next/image";
import Hero from "./component/hero/Hero";
import SecondHero from "./component/hero/SecondHero";
import Tab from "./component/hero/Tab";

export default function Home() {
  return (
    <div>
      <PublicLayout>
        <Hero/>
        <Tab/>
        <SecondHero/>
      </PublicLayout>
    </div>
  );
}
