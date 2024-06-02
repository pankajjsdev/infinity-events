import HeroSection from "@/components/cm_ui/hero/HeroSection"
import BasicInfo from "./components/BasicInfo"
import Description from "./components/Description"
import ImportantInfo from "./components/ImportantInfo"
import MapSection from "./components/MapSection"
import MoreEvents from "./components/MoreEvents"

function page() {
  return (
    <div>
          <HeroSection />
        <BasicInfo/>
        <Description/>
        <ImportantInfo/>
        <MapSection/>
        <MoreEvents/>
        
    </div>
  )
}

export default page