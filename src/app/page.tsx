import AboutUs from "@app/components/home/about-us";
import HomeHeader from "@app/components/home/home-header";
import HomeProduct from "@app/components/home/home-product";

export default function Home() {
  return (
    <main>
      <HomeHeader />
      <div className="lg:space-y-[200px] sm:space-y-[96px] space-y-[120px]">
        <HomeProduct />
        <AboutUs />
      </div>
    </main>
  );
}
