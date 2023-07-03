interface Calendar {
    id: Number;
    userId: Number;
    meetings: meeting[];
}

interface User {
    id: Number;
    userName: string;
    email: string;
    password: string;
    calendar: Calendar[];
}

interface meeting {
    id: Number;
    title: string;
    description: string;
    startTime: Date;
    endTime: Date;
    organiser: User;
    attendees: User[];
}
