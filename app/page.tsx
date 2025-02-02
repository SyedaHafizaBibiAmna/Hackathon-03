
 
 import Hero from "./components/hero";
import Newest from "./components/category";
import CategoryPage from "./components/Newest";
import CompanyLogo from "./components/companyLogo";
import Testimonials from "./components/testimonials";





export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero />
     <CompanyLogo/>
      <CategoryPage/>
      <Newest />
     <Testimonials/>
    </div>
  );
}