import { Input } from "@/components/ui/input";
import { FaInfinity, FaMapMarkerAlt, FaChevronDown } from "react-icons/fa";
import DesktopNav from "./DesktopNav";
import { Button } from "@/components/ui/button";
import Search from "./Search";

import MobileNav from "./MobileNav";

function Header() {
    return (
        <header className="w-full  lg:bg-[#181D1C] py-3">
            {/*  desktop header */}
            <div className="hidden container xl:all-center1 text-white">
                <div className="flex items-center gap-2">
                    <FaInfinity size={50} className="" />
                    <span className="text-3xl font-bold">Events</span>
                    <Search mode="desktop" />
                    <div className="flex flex-col items-center justify-center mx-2">
                        <FaMapMarkerAlt />
                        <address className="inline-flex items-center justify-center gap-2">Delhi, india <FaChevronDown /></address>
                    </div>
                </div>
                <div className="all-center gap-3">
                    <DesktopNav />
                    <Button className="bg-accent-orange hover:bg-accent-lightOrange">Sign in</Button>
                </div>
            </div>

            {/* mobile header */}
            {/* <div className="xl:hidden flex items-center justify-between mx-1">
                <FaInfinity size={30} className="text-white" /> 
                <Search mode="mobile" />
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div> */}


            <div className="xl:hidden mx-1">
                <div className="flex items-center justify-between mb-16">
                    <div className="flex gap-1">
                    <FaInfinity size={30} className="text-black" />
                    <span className="text-3xl font-bold">Events</span>
                    </div>
                    <div className="xl:hidden">
                        <MobileNav />
                    </div>
                </div>
                <Search mode="mobile" />
            </div>
        </header>
    )
}

Header.propTypes = {}

export default Header
