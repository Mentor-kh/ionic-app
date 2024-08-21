export interface Feed {
    author: User;
    date: string;
    description: string;
    image: string;
    reactions: Reactions;
}

export interface Reactions {
    isLiked: boolean;
}

export interface User {
    avatarUrl: string;
    name: string;
    date: string;
}