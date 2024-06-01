"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const filterButtons = [
    { title: "All Days", path: "/" },
    { title: "Today", path: "/today" },
    { title: "Tomorrow", path: "/tomorrow" },
    { title: "Next Week", path: "/next-week" },
    { title: "Calendar", path: "/calendar" },
];

function EventFilter() {
    const pathname = usePathname();

    return (
        <section className='my-[36px] py-[80px] bg-neutral-grey0'>
            <div className='container flex items-center'>
                <div className='mx-auto space-x-3'>
                    {filterButtons.map((link, index) => (
                        <Link 
                            key={index} 
                            href={link.path} 
                            className={`border-2 py-2 px-4 md:px-6 border-neutral-grey4 rounded-full hover:bg-accent-lightCyan hover:text-white text-center truncate text-[24px] font-medium ${pathname === link.path ? "bg-accent-lightCyan text-white" : ""}`}
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default EventFilter;
