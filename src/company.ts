export interface Company {
    id: string;
    name: string;
    logo: number;
    routingSettings: {sms: Object; email: Object};
    creditsSms: number;
    creditsEmail: number;
}
