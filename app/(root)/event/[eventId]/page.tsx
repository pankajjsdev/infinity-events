import HeroSection from "@/components/cm_ui/hero/HeroSection"
import BasicInfo from "./components/BasicInfo"
import Description from "./components/Description"
import ImportantInfo from "./components/ImportantInfo"
import MapSection from "./components/MapSection"
import MoreEvents from "./components/MoreEvents"
import EventName from "./components/EventName"
import SpaceBar from "@/components/cm_ui/common/SpaceBar"
import TabNavs from "./components/TabNavs"
import { Button } from "@/components/ui/button"


function page() {
  return (
    <div  className="bg-[#fbfbfb]">
      <div className="bg-[url('/assets/images/eventdetails/eventill.svg')] bg-no-repeat">
        <HeroSection />
      </div>
      <EventName />
      {/* <SpaceBar /> */}
      <TabNavs />
      {/* <SpaceBar /> */}
      <BasicInfo />
      <SpaceBar />
      <Description />
      <SpaceBar />
      <ImportantInfo />
      <SpaceBar />
      <MapSection />
      <SpaceBar />
      <MoreEvents />
      <SpaceBar />
    </div>
  )
}

export default page