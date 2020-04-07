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
    twitter?: object;
    facebook?: string;
    google?: string;
    emailPassword?: boolean;
}
