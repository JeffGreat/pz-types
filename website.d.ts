export enum WebsiteStatusEnum {
    Draft = 0,
    Published = 2,
}

export enum SubscriptionStatusEnum {
    Close = 0,
    Open = 2,
}

export enum SubscriptionOpenEnum {
    OpenToContacts = 0,
    OpenToAll = 1,
}

export interface Website {
    site: { status: WebsiteStatusEnum; content: string };
    subscription: {
        status: SubscriptionStatusEnum;
        open: SubscriptionOpenEnum;
        quota: number;
    };
}
