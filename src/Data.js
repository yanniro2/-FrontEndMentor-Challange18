import user1 from "./img/user-1.jpg";
import user2 from "./img/user-2.jpg";
import user3 from "./img/user-3.jpg";
import user4 from "./img/user-4.jpg";
import user5 from "./img/user-5.jpg";
import user6 from "./img/user-6.jpg";
import user7 from "./img/user-7.jpg";
import comment from "./img/comment/comment.jpg"

const data = [
    {
        id: 1,
        name: "Mark Webber",
        action: "reacted to your recent post",
        read: false,
        section: "My first tournament today!",
        time: "1m ago",
        message: false,
        img: user1,
    },
    {
        id: 2,
        name: "Angela Gray",
        action: "followed you",
        read: false,
        time: "5m ago",
        group: false,
        message: false,
        img: user2,
    },
    {
        id: 3,
        name: "Jacob thompson",
        action: "has joined your group",
        read: false,
        group: "Chees Club",
        time: "1 day ago",
        message: false,
        img: user3,
    },
    {
        id: 4,
        name: "Rizky Hasanuddin",
        action: "sent you a private message",
        read: true,
        section: false,
        time: "5 days ago",
        message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and   I'm already having lots of fun and improving my game.",
        img: user4,
    },
    {
        id: 5,
        name: " Kimberly Smith",
        action: "commented on your picture",
        read: true,
        section: false,
        time: "1 week ago",
        group: false,
        img: user5,
        comment: comment,

    },
    {
        id: 6,
        name: "Nathan Peterson",
        action: "reacted to your recent post",
        read: true,
        section: "5 end-game strategies to increase your win rate",
        time: "2 weeks ago",
        group: false,
        img: user6,
    },
    {
        id: 7,
        name: "Anna Kim",
        action: "left the group",
        read: true,
        section: false,
        group: " Chess Club",
        time: "2 weeks ago",
        img: user7,
    },
]

export default data;
