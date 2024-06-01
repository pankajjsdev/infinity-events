"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"


const eventNavs = [
    {
        title: 'All',
        path: '/'
    },
    {
        title: 'For you',
        path: '/for-you'
    },
    {
        title: 'Free',
        path: '/free'
    },
    {
        title: 'Online',
        path: '/online'
    },
    {
        title: 'Music',
        path: '/music'
    },
    {
        title: 'Sports & Games',
        path: '/sports-games'
    },
    {
        title: 'Politics',
        path: '/polics'
    },
    {
        title: 'Community',
        path: '/community'
    },


]


function EventNavs() {
    const pathname = usePathname()
    return (
        <div className="container">
            <ul className="flex gap-8">
                {
                    eventNavs?.map((nav, index) => {
                        return (
                            <Link key={index} className={`${pathname == nav.path ? "text-accent-darkCyan border-b-2 border-b-accent-darkCyan" : "text-neutral-grey4"} font-semibold`} href={nav.path}>{nav.title}</Link>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default EventNavs