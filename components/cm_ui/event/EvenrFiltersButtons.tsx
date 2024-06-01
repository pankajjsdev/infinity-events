import { Button } from '@/components/ui/button'
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

const filterButtons = [
    { title: "Badminton", path: "/badminton" },
    { title: "Cricket", path: "/cricket" },
    { title: "Music", path: "/music" },
    { title: "Art", path: "/art" },
    { title: "Technology", path: "/technology" },
    { title: "Science", path: "/science" },
    { title: "Dance", path: "/dance" },
    { title: "Theater", path: "/theater" },
    { title: "Cooking", path: "/cooking" },
    { title: "Fitness", path: "/fitness" },
    { title: "Photography", path: "/photography" },
    { title: "Travel", path: "/travel" },
    { title: "Gaming", path: "/gaming" },
    { title: "Fashion", path: "/fashion" },
    { title: "Literature", path: "/literature" },
    { title: "History", path: "/history" },
    { title: "Nature", path: "/nature" },
    { title: "Animals", path: "/animals" },
    { title: "Meditation", path: "/meditation" },
    { title: "Cycling", path: "/cycling" }
];

function EventFiltersButtons() {
    return (
        <section className='container my-[80px]'>
            <div className='my-[80px]'>
                <h1 className='text-[40px] font-semibold'>A Personal experience like never before</h1>
                <p className='text-[24px] font-medium'>Select your hobbies and other favorite activities to get suggestions based on what you love.</p>
                <div className='flex flex-wrap gap-6 my-8 px-2'>
                    {filterButtons.map((link, index) => (
                        <Link key={index} href={link.path} className='flex items-center justify-center border-2 py-2 px-4 md:px-6 border-neutral-grey4 rounded-full hover:bg-accent-lightCyan hover:text-white text-center truncate'>
                            {link.title}
                        </Link>
                    ))}
                </div>
                <Button className='bg-accent-darkCyan text-white hover:bg-accent-lightCyan'>See more</Button>
            </div>




            <div className="w-full  h-[500px] mt-[80px] relative bg-[url('/assets/images/ads/ads2.png')] bg-cover bg-center rounded-2xl">
                <div className="absolute left-20 bottom-20">
                    <h3 className="text-white w-[350px] text-[24px] font-semibold">
                        You can now gift tickets to an event to your friends
                    </h3>
                    <p className="text-white my-4 text-[14px] font-medium">
                        Last minute gifting needs, from ₹799
                    </p>
                    <Button className="bg-accent-darkCyan text-white hover:bg-accent-lightCyan">
                        Send a gift
                    </Button>
                </div>
            </div>

            <div className="w-full  h-[500px] relative bg-[url('/assets/images/ads/ads2.png')] bg-cover bg-center rounded-2xl my-10">
                <div className='absolute  pl-16 py-5 pr-4 rounded-e-2xl bottom-20  bg-secondary-cyanDarkest'>
                    <h3 className='text-white w-[350px] text-[24px] font-semibold'>Plan your own event</h3>
                    <p className='text-white my-4 text-[14px] font-medium'>Organize exiting events and contribute in all the fun!</p>
                    <Button className='bg-accent-darkCyan text-white hover:bg-accent-lightCyan'>Organize an event</Button>

                </div>
            </div>




            {/* <div className='relative my-10'>
                <Image
                    src={"/assets/images/ads/ads1.png"}
                    alt=""
                    width={600}
                    height={400}
                    className='w-full mx-auto'
                />
                <div className='absolute left-[135px] pl-16 py-5 pr-4 rounded-e-2xl bottom-20 bg-secondary-cyanDarkest'>
                    <h3 className='text-white w-[350px] text-[24px] font-semibold'>Plan your own event</h3>
                    <p className='text-white my-4 text-[14px] font-medium'>Organize exiting events and contribute in all the fun!</p>
                    <Button className='bg-accent-darkCyan text-white hover:bg-accent-lightCyan'>Organize an event</Button>

                </div>
            </div> */}








        </section>
    )
}

export default EventFiltersButtons
