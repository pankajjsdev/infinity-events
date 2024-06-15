import Section from "@/components/cm_ui/common/Section"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"

const events = [

    {

        "title": "Let you go insane",
        "date": "Tuesday, 22nd January 2024",
        "time": "22:00",
        "location": {
            "address": "1901 Thornridge Cir.",
            "city": "Shiloh",
            "state": "Hawaii",
            "postal_code": "81063"
        },
        "organizer": {
            "name": "Annette Black",
            "followers": 23500
        },
        "attendance": {
            "confirmed_attendees": 200
        },
        "description": "Lorem ipsum dolor sit amet consectetur. Sit massa et faucibus cursus integer aenean sed sed. Aliquet mi magna viverra amet. Malesuada neque in tellus velit. Quisque sapien pellentesque sed interdum euismod. Donec commodo laoreet amet at hac nec. Egestas tincidunt dolor nibh amet lectus duis commodo. Ac pretium nulla tellus.",
        "images": [
            "https://example.com/path-to-image1.jpg",
            "https://example.com/path-to-image2.jpg"
        ],
        "thumbnail": "/assets/images/event_card/event4.png",
        "paid": true,
        "price": 50.00,
        "event_details_page": {
            "schedule": [
                {
                    "time": "22:00",
                    "activity": "Opening Remarks"
                },
                {
                    "time": "22:30",
                    "activity": "Main Event"
                },
                {
                    "time": "00:00",
                    "activity": "Closing Remarks"
                }
            ],
            "speakers": [
                {
                    "name": "John Doe",
                    "topic": "Event Highlights"
                },
                {
                    "name": "Jane Smith",
                    "topic": "Future Plans"
                }
            ],
            "faq": [
                {
                    "question": "What is the dress code?",
                    "answer": "Casual attire is recommended."
                },
                {
                    "question": "Are there any age restrictions?",
                    "answer": "Participants must be at least 18 years old."
                }
            ],
            "conditions": [
                {
                    "condition": "No outside food or drinks allowed."
                },
                {
                    "condition": "Smoking is prohibited inside the venue."
                },
                {
                    "condition": "Masks are mandatory for all attendees."
                },
                {
                    "condition": "Please carry a valid ID for verification."
                },
                {
                    "condition": "No re-entry allowed after exit."
                }
            ]
        }
    },

    {

        "title": "Let you go insane",
        "date": "Tuesday, 22nd January 2024",
        "time": "22:00",
        "location": {
            "address": "1901 Thornridge Cir.",
            "city": "Shiloh",
            "state": "Hawaii",
            "postal_code": "81063"
        },
        "organizer": {
            "name": "Annette Black",
            "followers": 23500
        },
        "attendance": {
            "confirmed_attendees": 200
        },
        "description": "Lorem ipsum dolor sit amet consectetur. Sit massa et faucibus cursus integer aenean sed sed. Aliquet mi magna viverra amet. Malesuada neque in tellus velit. Quisque sapien pellentesque sed interdum euismod. Donec commodo laoreet amet at hac nec. Egestas tincidunt dolor nibh amet lectus duis commodo. Ac pretium nulla tellus.",
        "images": [
            "https://example.com/path-to-image1.jpg",
            "https://example.com/path-to-image2.jpg"
        ],
        "thumbnail": "/assets/images/event_card/event4.png",
        "paid": true,
        "price": 50.00,
        "event_details_page": {
            "schedule": [
                {
                    "time": "22:00",
                    "activity": "Opening Remarks"
                },
                {
                    "time": "22:30",
                    "activity": "Main Event"
                },
                {
                    "time": "00:00",
                    "activity": "Closing Remarks"
                }
            ],
            "speakers": [
                {
                    "name": "John Doe",
                    "topic": "Event Highlights"
                },
                {
                    "name": "Jane Smith",
                    "topic": "Future Plans"
                }
            ],
            "faq": [
                {
                    "question": "What is the dress code?",
                    "answer": "Casual attire is recommended."
                },
                {
                    "question": "Are there any age restrictions?",
                    "answer": "Participants must be at least 18 years old."
                }
            ],
            "conditions": [
                {
                    "condition": "No outside food or drinks allowed."
                },
                {
                    "condition": "Smoking is prohibited inside the venue."
                },
                {
                    "condition": "Masks are mandatory for all attendees."
                },
                {
                    "condition": "Please carry a valid ID for verification."
                },
                {
                    "condition": "No re-entry allowed after exit."
                }
            ]
        }
    },

    {

        "title": "Let you go insane",
        "date": "Tuesday, 22nd January 2024",
        "time": "22:00",
        "location": {
            "address": "1901 Thornridge Cir.",
            "city": "Shiloh",
            "state": "Hawaii",
            "postal_code": "81063"
        },
        "organizer": {
            "name": "Annette Black",
            "followers": 23500
        },
        "attendance": {
            "confirmed_attendees": 200
        },
        "description": "Lorem ipsum dolor sit amet consectetur. Sit massa et faucibus cursus integer aenean sed sed. Aliquet mi magna viverra amet. Malesuada neque in tellus velit. Quisque sapien pellentesque sed interdum euismod. Donec commodo laoreet amet at hac nec. Egestas tincidunt dolor nibh amet lectus duis commodo. Ac pretium nulla tellus.",
        "images": [
            "https://example.com/path-to-image1.jpg",
            "https://example.com/path-to-image2.jpg"
        ],
        "thumbnail": "/assets/images/event_card/event4.png",
        "paid": true,
        "price": 50.00,
        "event_details_page": {
            "schedule": [
                {
                    "time": "22:00",
                    "activity": "Opening Remarks"
                },
                {
                    "time": "22:30",
                    "activity": "Main Event"
                },
                {
                    "time": "00:00",
                    "activity": "Closing Remarks"
                }
            ],
            "speakers": [
                {
                    "name": "John Doe",
                    "topic": "Event Highlights"
                },
                {
                    "name": "Jane Smith",
                    "topic": "Future Plans"
                }
            ],
            "faq": [
                {
                    "question": "What is the dress code?",
                    "answer": "Casual attire is recommended."
                },
                {
                    "question": "Are there any age restrictions?",
                    "answer": "Participants must be at least 18 years old."
                }
            ],
            "conditions": [
                {
                    "condition": "No outside food or drinks allowed."
                },
                {
                    "condition": "Smoking is prohibited inside the venue."
                },
                {
                    "condition": "Masks are mandatory for all attendees."
                },
                {
                    "condition": "Please carry a valid ID for verification."
                },
                {
                    "condition": "No re-entry allowed after exit."
                }
            ]
        }
    },

    {

        "title": "Let you go insane",
        "date": "Tuesday, 22nd January 2024",
        "time": "22:00",
        "location": {
            "address": "1901 Thornridge Cir.",
            "city": "Shiloh",
            "state": "Hawaii",
            "postal_code": "81063"
        },
        "organizer": {
            "name": "Annette Black",
            "followers": 23500
        },
        "attendance": {
            "confirmed_attendees": 200
        },
        "description": "Lorem ipsum dolor sit amet consectetur. Sit massa et faucibus cursus integer aenean sed sed. Aliquet mi magna viverra amet. Malesuada neque in tellus velit. Quisque sapien pellentesque sed interdum euismod. Donec commodo laoreet amet at hac nec. Egestas tincidunt dolor nibh amet lectus duis commodo. Ac pretium nulla tellus.",
        "images": [
            "https://example.com/path-to-image1.jpg",
            "https://example.com/path-to-image2.jpg"
        ],
        "thumbnail": "/assets/images/event_card/event4.png",
        "paid": true,
        "price": 50.00,
        "event_details_page": {
            "schedule": [
                {
                    "time": "22:00",
                    "activity": "Opening Remarks"
                },
                {
                    "time": "22:30",
                    "activity": "Main Event"
                },
                {
                    "time": "00:00",
                    "activity": "Closing Remarks"
                }
            ],
            "speakers": [
                {
                    "name": "John Doe",
                    "topic": "Event Highlights"
                },
                {
                    "name": "Jane Smith",
                    "topic": "Future Plans"
                }
            ],
            "faq": [
                {
                    "question": "What is the dress code?",
                    "answer": "Casual attire is recommended."
                },
                {
                    "question": "Are there any age restrictions?",
                    "answer": "Participants must be at least 18 years old."
                }
            ],
            "conditions": [
                {
                    "condition": "No outside food or drinks allowed."
                },
                {
                    "condition": "Smoking is prohibited inside the venue."
                },
                {
                    "condition": "Masks are mandatory for all attendees."
                },
                {
                    "condition": "Please carry a valid ID for verification."
                },
                {
                    "condition": "No re-entry allowed after exit."
                }
            ]
        }
    },

    {

        "title": "Let you go insane",
        "date": "Tuesday, 22nd January 2024",
        "time": "22:00",
        "location": {
            "address": "1901 Thornridge Cir.",
            "city": "Shiloh",
            "state": "Hawaii",
            "postal_code": "81063"
        },
        "organizer": {
            "name": "Annette Black",
            "followers": 23500
        },
        "attendance": {
            "confirmed_attendees": 200
        },
        "description": "Lorem ipsum dolor sit amet consectetur. Sit massa et faucibus cursus integer aenean sed sed. Aliquet mi magna viverra amet. Malesuada neque in tellus velit. Quisque sapien pellentesque sed interdum euismod. Donec commodo laoreet amet at hac nec. Egestas tincidunt dolor nibh amet lectus duis commodo. Ac pretium nulla tellus.",
        "images": [
            "https://example.com/path-to-image1.jpg",
            "https://example.com/path-to-image2.jpg"
        ],
        "thumbnail": "/assets/images/event_card/event4.png",
        "paid": true,
        "price": 50.00,
        "event_details_page": {
            "schedule": [
                {
                    "time": "22:00",
                    "activity": "Opening Remarks"
                },
                {
                    "time": "22:30",
                    "activity": "Main Event"
                },
                {
                    "time": "00:00",
                    "activity": "Closing Remarks"
                }
            ],
            "speakers": [
                {
                    "name": "John Doe",
                    "topic": "Event Highlights"
                },
                {
                    "name": "Jane Smith",
                    "topic": "Future Plans"
                }
            ],
            "faq": [
                {
                    "question": "What is the dress code?",
                    "answer": "Casual attire is recommended."
                },
                {
                    "question": "Are there any age restrictions?",
                    "answer": "Participants must be at least 18 years old."
                }
            ],
            "conditions": [
                {
                    "condition": "No outside food or drinks allowed."
                },
                {
                    "condition": "Smoking is prohibited inside the venue."
                },
                {
                    "condition": "Masks are mandatory for all attendees."
                },
                {
                    "condition": "Please carry a valid ID for verification."
                },
                {
                    "condition": "No re-entry allowed after exit."
                }
            ]
        }
    }
]

function page() {
    return (
        <div>
            <div className="w-full bg-[url('/assets/images/eventdetails/eventill.svg')] bg-no-repeat bg-cover">
                <div className="grid grid-cols-3 container gap-2">
                    <div className="mt-7">
                        <Image
                            src={"/assets/images/profile/profile.png"}
                            alt=""
                            width={250}
                            height={200}
                        />
                    </div>
                    <div className="shadow-2xl col-span-2 rounded-[36px] px-[28px] py-[36px] mt-7">
                        <h1 className="text-accent-lightOrange text-2xl font-semibold">Dean Dun Kirk</h1>
                        <div className="flex"><span className="text-sm">Date of Birth:</span> <h4 className="text-sm font-semibold">  27th October 1997</h4></div>
                        <div className="flex">                        <span className="text-sm">Gender:</span><h4 className="text-sm font-semibold"> Male</h4></div>
                        <div className="flex"><span className="text-sm">Email:</span><h4 className="text-sm font-semibold"> abc@gmail.com</h4></div>
                        <div className="flex"> <span className="text-sm">Mobile:</span><h4 className="text-sm font-semibold"> +918374759381</h4></div>
                        <div className="flex"> <span className="text-sm">Hobbies:</span><h4 className="text-sm font-semibold"> 27th October 1997</h4></div>
                        <div className="flex"> <span className="text-sm">Medical Condition:</span><h4 className="text-sm font-semibold"> 27th October 1997</h4></div>
                    </div>
                </div>
            </div>
            <div className="container px-16 mt-8">
                <Tabs defaultValue="about" className="w-full">
                    <TabsList className="">
                        <TabsTrigger value="about">About</TabsTrigger>
                        <TabsTrigger value="mybookings">mybookings</TabsTrigger>
                        <TabsTrigger value="myevents">myevents</TabsTrigger>
                        <TabsTrigger value="myfavourites">myfavourites</TabsTrigger>
                        <TabsTrigger value="mycalendar">mycalendar</TabsTrigger>
                    </TabsList>
                    <TabsContent value="about" className="my-3">
                        <Section title="About me">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta perspiciatis repudiandae dolorem alias corporis perferendis necessitatibus aut distinctio illo, mollitia, quas iste, aliquid dolor officiis dolores? Deserunt quidem vel temporibus!
                            </p>
                        </Section>
                    </TabsContent>
                    <TabsContent value="mybookings">
                        <section className="space-y-3 my-3">

                            {
                                events.map((event, index) => {
                                    return (
                                        <div key={index} className="grid grid-cols-4 items-center bg-neutral-grey0 p-4 rounded-xl gap-3">
                                            <div className="bg-neutral-grey0">
                                                <Image
                                                    src={"/assets/images/profile/event.png"}
                                                    alt=""
                                                    width={250}
                                                    height={200}
                                                    className=""
                                                />
                                            </div>
                                            <div className="bg-neutral-grey0 rounded-e-lg col-span-2">
                                                <Link href={`/event/${event.title}`} className="text-lg lg:text-xl font-semibold mb-2">{event.title}</Link>
                                                <p className="text-[12px] font-medium text-secondary-cyanDarkest mb-2">{event.location.address} {event.location.city} {event.location.state} {event.location.postal_code}</p>
                                                <p className="text-[12px] font-medium text-secondary-cyanDarkest mb-2">{event.date} {"'"} {event.time}</p>
                                                <p className="text-[12px] font-medium text-secondary-cyanDarkest mb-2">Quantity: 2</p>

                                                <div className="hidden lg:all-center1 mt-12">
                                                    <p className="text-[12px] font-medium text-neutral-grey5">Ticket price: </p>
                                                    <span className="text-[12px] font-medium text-neutral-gre">$800</span>
                                                </div>

                                                <div className="hidden lg:all-center1 my-2">
                                                    <p className="text-[12px] font-medium text-neutral-grey5">Convenience fees + Taxes: </p>
                                                    <span className="text-[12px] font-medium text-neutral-gre">$80</span>
                                                </div>
                                                <div className="divide-dotted border-dashed w-full border-b-2 border-black my-2"></div>
                                                <div className="hidden lg:all-center1 my-2">
                                                    <p className="text-[12px] font-medium text-neutral-grey5">Convenience fees + Taxes: </p>
                                                    <span className="text-[12px] font-medium text-neutral-gre">$880</span>
                                                </div>
                                            </div>

                                            <div className="bg-neutral-grey0 rounded-s-lg">
                                                <Image
                                                    src={"/assets/images/profile/qr.png"}
                                                    alt=""
                                                    width={100}
                                                    height={100}
                                                />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </section>

                    </TabsContent>
                    <TabsContent value="myevents">
                    <section className="space-y-3 my-3">

{
    events.map((event, index) => {
        return (
            <div key={index} className="grid grid-cols-4 items-center bg-neutral-grey0 p-3 rounded-xl gap-3">
                <div className="bg-neutral-grey0">
                    <Image
                        src={"/assets/images/profile/event.png"}
                        alt=""
                        width={250}
                        height={200}
                        className=""
                    />
                </div>
                <div className="bg-neutral-grey0 rounded-e-lg col-span-2">
                    <Link href={`/event/${event.title}`} className="text-lg lg:text-xl font-semibold mb-2">{event.title}</Link>
                    <p className="text-[12px] font-medium text-secondary-cyanDarkest mb-2">{event.location.address} {event.location.city} {event.location.state} {event.location.postal_code}</p>
                    <p className="text-[12px] font-medium text-secondary-cyanDarkest mb-2">{event.date} {"'"} {event.time}</p>
                    <p className="text-[12px] font-medium text-secondary-cyanDarkest mb-2">Quantity: 2</p>
                </div>

               
            </div>
        )
    })
}
</section>
                    </TabsContent>
                    <TabsContent value="myfavourites">
                        <p>about</p>
                    </TabsContent>
                    <TabsContent value="mycalendar">
                        <p>mycalendar</p>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

export default page