"use client"

import Link from "next/link"
import {usePathname} from  "next/navigation"
const links = [
    {
        title:'Events',
        path:'/'
    },
    {
        title:'Stories',
        path:'stories'
    },
    {
        title:'Our Mission',
        path:'our-mission'
    },
    {
        title:'Contact us',
        path:'contactus'
    },
    // {
    //     title:'My Profile',
    //     path:'profile'
    // }
]

function DesktopNav() {
    const pathname =  usePathname()
  return (
    <>
    <nav className="flex gap-3">
        {
            links.map((link, index)=>{
                return(
                    <Link className={`${link.path == pathname && "text-accent-lightOrange border-b-2 border-b-accent-lightOrange"} font-medium hover:text-accent-lightOrange `} key={index} href={link.path}>{link.title}</Link>
                )
            })
        }
    </nav>
    </>
  )
}

export default DesktopNav