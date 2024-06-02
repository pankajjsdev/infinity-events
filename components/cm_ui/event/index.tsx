
import Section from "../common/Section"
import EventCard from "./EventCard"
import EventFilter from "./EventFilters"
import EventNavs from "./EventNavs"
import { EventCardProps } from "./type"



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
        "thumbnail": "/assets/images/event_card/event1.png",
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
        "thumbnail": "/assets/images/event_card/event2.png",
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
        "thumbnail": "/assets/images/event_card/event3.png",
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
        "thumbnail": "/assets/images/event_card/event2.png",
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
        "thumbnail": "/assets/images/event_card/event1.png",
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
        "thumbnail": "/assets/images/event_card/event3.png",
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
        "thumbnail": "/assets/images/event_card/event1.png",
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
function EventSection() {
    return (
        <>
            {/* <EventFilter/> */}
            {/* <EventNavs/> */}
            <Section title="Popular in Delhi" containerStyle="lg:mt-[36px]">
                <div className="flex flex-row overflow-x-auto space-x-4 -mr-[35px] lg:mr-0 py-3 lg:grid lg:grid-cols-4 lg:gap-8 lg:space-x-0">
                    {
                        events.map((event, index) => {
                            return (
                                <div key={index} className="flex-shrink-0 lg:flex-shrink">
                                    <EventCard event={event} type={1} />
                                </div>
                            )
                        })
                    }
                </div>
            </Section>


            <Section title="More Events" containerStyle="lg:mt-[36px]">
                <div className="grid grid-cols-2 xl:grid-cols-4  gap-2 md:gap-6 lg:gap-8">
                    {
                        events.map((event, index) => {
                            return (
                                <EventCard
                                    key={index}
                                    event={event}
                                    type={2}
                                />
                            )
                        })
                    }
                </div>
            </Section>
        </>
    )
}

export default EventSection