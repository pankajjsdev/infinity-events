

export interface Event {
    thumbnail: string;
    title: string;
    date: string;
    time: string;
    location: {
        address: string;
        city: string;
        state: string;
        postal_code: string;
    };
    organizer: {
        name: string;
        followers: number;
    };
    attendance: {
        confirmed_attendees: number;
    };
}

export interface EventCardProps {
    event: Event;
}