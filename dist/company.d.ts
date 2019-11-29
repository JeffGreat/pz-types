export interface SmsRouter {
    sender?: string;
    provider?: {
        endpoint: string;
        key: string;
        secret: string;
        consummerKey: string;
    };
}
export interface EmailRouter {
    sender?: string;
    provider?: {
        endpoint: string;
        key: string;
        secret: string;
        consummerKey: string;
    };
}
export interface RoutingSettings {
    sms: SmsRouter;
    email: EmailRouter;
}
export interface Company {
    id: string;
    name: string;
    logo: number;
    routingSettings: RoutingSettings;
    creditsSms: number;
    creditsEmail: number;
}
