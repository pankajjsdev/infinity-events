"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"


const eventNavs = [
    {
        title: 'Basic',
        path: 'basic'
    },
    {
        title: 'Description',
        path: 'description'
    },
    {
        title: 'Important Info',
        path: 'info'
    },
    {
        title: 'Location',
        path: 'location'
    },
    {
        title: 'Chat',
        path: 'chat'
    }
]


function TabNavs() {
    const pathname = usePathname()
    return (
        <div className="container hidden xl:flex">
            <ul className="flex items-center my-2 gap-8">
                {
                    eventNavs?.map((nav, index) => {
                        return (
                            <Link key={index} className={`${pathname == nav.path ? "text-accent-darkCyan border-b-2 border-b-accent-darkCyan" : "text-neutral-grey4"} font-semibold`} href={`${pathname}#${nav.path}`}>{nav.title}</Link>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default TabNavs