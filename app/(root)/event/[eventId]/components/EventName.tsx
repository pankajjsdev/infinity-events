import { Button } from "@/components/ui/button"
import { IoMdCalendar} from "react-icons/io";


function EventName() {
    return (
        <div className="bg-[#fbfbfb] py-[18px] relative">
            <div className="container">
            <Button className='hidden xl:flex bg-accent-lightCyan text-white hover:bg-accent-lightCyan absolute -top-5'> <IoMdCalendar className="mx-2"/> Saturday, 20th November 2023</Button>
                <h1 className="text-4xl font-bold text-secondary-cyanDarkest">Event Name</h1>
                <p>Organizer Name</p>
            </div>
        </div>
    )
}

export default EventName