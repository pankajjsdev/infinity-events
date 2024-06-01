import CategorySection from "@/components/cm_ui/category/CategorySection";
import EvenrFiltersButtons from "@/components/cm_ui/event/EvenrFiltersButtons";
import EventSection from "@/components/cm_ui/event/EventSection";
import Feedback from "@/components/cm_ui/feedback/Feedback";
import HeroSection from "@/components/cm_ui/hero/HeroSection";
import { cookies } from "next/headers"

export default function Home() {


  // cookies().set({
  //   name: 'selected_location',
  //   value: JSON.stringify({
  //     "address": "1901 Thornridge Cir.",
  //     "city": "Shiloh",
  //     "state": "Hawaii",
  //     "postal_code": "81063"
  //   }),
  //   httpOnly: true,
  //   path: '/',
  // })


return (
  <main>
    <HeroSection />
    <CategorySection/>
    <EventSection />
    <EvenrFiltersButtons />
    <Feedback/>
  </main>
);
}
