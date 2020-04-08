export interface User {
    id: string;
    email: string | null;
    picture: string;
    name?: string;
    company: string;
    services?: ServicesInfo;
    role: string;
    isSuperAdmin: boolean;
}

export interface Auth {
    token: string;
    user: User;
}

export interface ServicesInfo {
    twitter?: {
        oauth_token: string;
        oauth_token_secret: string;
        user_id: string;
        screen_name: string;
    };
    facebook?: string;
    google?: string;
    emailPassword?: boolean;
}
