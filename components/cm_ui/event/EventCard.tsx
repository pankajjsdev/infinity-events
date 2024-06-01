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


function EventCard({event}:EventCardProps) {
    return (
                            <Card className="py-4 rounded-[16px]">
                                <CardContent>
                                    <Image
                                        src={event.thumbnail}
                                        alt=""
                                        width={250}
                                        height={166}
                                    />
                                    <h1 className="text-xl font-semibold mb-2">{event.title}</h1>
                                    <p className="text-[12px] font-medium text-secondary-cyanDarkest mb-2">{event.date} {"'"} {event.time}</p>
                                    <p className="text-[12px] font-medium text-secondary-cyanDarkest mb-2">{event.location.address} {event.location.city} {event.location.state} {event.location.postal_code}</p>
                                    <div className="all-center1">
                                        <Link className="text-[12px] font-medium text-neutral-grey5 underline" href={event.organizer.name}>{event.organizer.name}</Link>
                                        <span className="text-[12px] font-medium text-neutral-gre">{event.organizer.followers / 100}k followers</span>
                                    </div>
                                    <p className="text-accent-darkCyan text-[12px] py-4">{event.attendance.confirmed_attendees} people are attending this event.</p>
                                </CardContent>
                                <CardFooter>
                                    <p className="line-clamp-3 font-medium text-secondary-cyanDarkest text-[16px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, at ducimus? Fugit, eveniet nobis possimus illo nulla amet temporibus cum quis distinctio, sint saepe incidunt ea, consequatur ipsa dolores laudantium.</p>
                                </CardFooter>
                            </Card>

    )
}

export default EventCard