"use client"

import { CiMenuFries } from "react-icons/ci";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { usePathname } from "next/navigation"
import Link from "next/link";
import { FaInfinity } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const links = [
    {
        title: 'Events',
        path: '/'
    },
    {
        title: 'Stories',
        path: '/stories'
    },
    {
        title: 'Our Mission',
        path: '/our-mission'
    },
    {
        title: 'Contact us',
        path: '/contactus'
    },
    {
        title: 'My Profile',
        path: '/profile'
    }
]


function MobileNav() {
    const pathname = usePathname()
    return (
        <div className="">
            <Sheet>
                <SheetTrigger>
                    <CiMenuFries className="text-[32px] text-accent-lightOrange" />
                </SheetTrigger>

                <SheetContent className="py-10">
                    <SheetHeader>
                        <div className="flex items-center gap-2"><FaInfinity size={50} className="" /> <span className="text-3xl font-bold">Events</span></div>
                    </SheetHeader>
                    <nav className="flex flex-col items-center py-8 gap-8">
                        {
                            links.map((link, index) => {
                                return (
                                    <div key={index}>
                                        <Link className={`${link.path == pathname && "text-accent-lightOrange border-b-2 border-b-accent-lightOrange"} font-bold`} href={link.path}>{link.title}</Link>
                                    </div>
                                )
                            })
                        }
                    </nav>
                    {/* <Button className="bg-accent-orange hover:bg-accent-lightOrange text-center">Create an Event</Button> */}
                </SheetContent>
            </Sheet>

        </div>
    )
}

export default MobileNav