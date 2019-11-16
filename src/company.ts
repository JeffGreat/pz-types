export interface SmsRouter {
    sender?: string;
    provider?: {endpoint: string; key: string; secret: string; consummerKey: string};
}

export interface EmailRouter {
    sender?: string;
    provider?: {endpoint: string; key: string; secret: string; consummerKey: string};
}

export interface Company {
    id: string;
    name: string;
    logo: number;
    routingSettings: {sms: SmsRouter; email: EmailRouter};
    creditsSms: number;
    creditsEmail: number;
}
