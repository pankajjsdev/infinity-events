import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { EventCardProps } from "./type"


function EventCard({event, type}:EventCardProps) {
    return (
                            <div className={`rounded-[16px] shadow border-2 py-[16px] px-[14px] ${type == 3 ? 'w-[300px]' : ''}`}>
                                    <Image
                                        src={event.thumbnail}
                                        alt=""
                                        width={300}
                                        height={166}
                                        className="rounded-[14px] object-cover"
                                    />
                                    <Link href={`/event/${event.title}`} className="text-lg lg:text-xl font-semibold mb-2">{event.title}</Link>
                                    <p className="text-[12px] font-medium text-secondary-cyanDarkest mb-2">{event.date} {"'"} {event.time}</p>
                                    <p className="text-[12px] font-medium text-secondary-cyanDarkest mb-2">{event.location.address} {event.location.city} {event.location.state} {event.location.postal_code}</p>
                                    <div className="hidden lg:all-center1">
                                        <Link className="text-[12px] font-medium text-neutral-grey5 underline" href={event.organizer.name}>{event.organizer.name}</Link>
                                        <span className="text-[12px] font-medium text-neutral-gre">{event.organizer.followers / 100}k followers</span>
                                    </div>
                                    <p className="text-accent-darkCyan text-[12px] py-4 hidden lg:block">{event.attendance.confirmed_attendees} people are attending this event.</p>
                                <CardFooter className="hidden lg:block">
                                    <p className="line-clamp-3 font-medium text-secondary-cyanDarkest text-[16px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, at ducimus? Fugit, eveniet nobis possimus illo nulla amet temporibus cum quis distinctio, sint saepe incidunt ea, consequatur ipsa dolores laudantium.</p>
                                </CardFooter>
                            </div>

    )
}

export default EventCard