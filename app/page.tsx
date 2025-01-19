
import Hero from "./components/hero";
import Newest from "./components/category";
import CategoryPage from "./components/Newest";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero />
      <CategoryPage/>
      <Newest />
    </div>
  );
}