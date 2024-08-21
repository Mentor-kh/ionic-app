import { Feed } from "./feed.interface";

export const MockFeeds: Feed[] = [
    {
        author: {
            avatarUrl: '/assets/avatar.png',
            name: 'Bankole A',
            date: 'May 25, 2024',
        },
        date: '26 hrs ago',
        description: "Whether you're a seasoned pro or just love the game, this event is for you. Register now and secure your spot! <br /><br /> Click the <a href='#'>link</a> for more details and to sign up. Don't miss out on the pickleball event of the year!",
        image: '/assets/image1.png',
        reactions: {
            isLiked: true,
        }
    },
    {
        author: {
            avatarUrl: '/assets/avatar.png',
            name: 'Bankole B',
            date: 'May 25, 2023',
        },
        date: '36 hrs ago',
        description: "Whether you're a seasoned pro or just love the game, this event is for you. Register now and secure your spot! <br /><br /> Click the <a href='#'>link</a> for more details and to sign up. Don't miss out on the pickleball event of the year!",
        image: '/assets/image3.jpg',
        reactions: {
            isLiked: false,
        }
    },
    {
        author: {
            avatarUrl: '/assets/avatar.png',
            name: 'Bankole C',
            date: 'May 25, 2022',
        },
        date: '126 hrs ago',
        description: "Whether you're a seasoned pro or just love the game, this event is for you. Register now and secure your spot! <br /><br /> Click the <a href='#'>link</a> for more details and to sign up. Don't miss out on the pickleball event of the year!",
        image: '/assets/image2.jpg',
        reactions: {
            isLiked: false,
        }
    },
    {
        author: {
            avatarUrl: '/assets/avatar.png',
            name: 'Bankole D',
            date: 'May 25, 2021',
        },
        date: '1126 hrs ago',
        description: "Whether you're a seasoned pro or just love the game, this event is for you. Register now and secure your spot! <br /><br /> Click the <a href='#'>link</a> for more details and to sign up. Don't miss out on the pickleball event of the year!",
        image: '/assets/image1.png',
        reactions: {
            isLiked: true,
        }
    },
]