import Section from "@/components/cm_ui/common/Section"
import { IoIosCalendar, IoMdTime , IoMdPin} from "react-icons/io";

function BasicInfo() {
    return (
        <Section title="Basic info" >
           <div className="flex space-x-10">
           <div>
                <h1 className="text-secondary-cyanDarkest font-bold flex items-center gap-2">
                <IoIosCalendar size={30} className="text-secondary-cyanDarkest"  />    Date
                </h1>
                <p>Friday, 20th November 2023</p>
            </div>

            <div>
                <h1 className="text-secondary-cyanDarkest font-bold flex items-center gap-2">
                  <IoMdTime size={30} className="text-secondary-cyanDarkest" />  Time
                </h1>
                <p>09:00 A.M. IST</p>
            </div>

            <div>
                <h1 className="text-secondary-cyanDarkest font-bold flex items-center gap-2">
                  <IoMdPin size={30} className="text-secondary-cyanDarkest" />  Location
                </h1>
                <p>Hotel Arts119 12 Ave SW, Calgary</p>
            </div>
           </div>
        </Section>
         )
}

export default BasicInfo