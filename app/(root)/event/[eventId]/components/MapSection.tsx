import Section from "@/components/cm_ui/common/Section"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { IoMdPin } from "react-icons/io"

function MapSection() {
    return (
        <>
        <Section title="Location" containerStyle="my-20" >
             <div>
                <h1 className="text-secondary-cyanDarkest font-bold flex items-center gap-2">
                  <IoMdPin  size={30} className="text-secondary-cyanDarkest" />  Location
                </h1>
                <p>Hotel Arts119 12 Ave SW, Calgary</p>
            </div>
            <div className="my-2">
                <Image
                src={"/assets/images/eventdetails/map.png"}
                alt=""
               width={500}
               height={500}
               className="w-full h-auto"
                />
            </div>
        </Section>

        <Section title="" containerStyle="my-20" >
            <div className="my-2">
                <Image
                src={"/assets/images/eventdetails/chat.png"}
                alt=""
               width={500}
               height={500}
               className="w-full h-auto"
                />
            </div>
        </Section>
        </>
    )
}

export default MapSection