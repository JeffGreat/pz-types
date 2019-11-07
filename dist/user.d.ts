export interface User {
    id: string;
    email: string | null;
    picture: string;
    name?: string;
    company: string;
    services: any;
    role: string;
}
export interface Auth {
    token: string;
    user: User;
}
